/* =====================================================
   Mistheld · App-Logik
===================================================== */

// Refactor: zentrale Konstanten — keine Magic Strings im Code
var SCREENS = Object.freeze({
  WELCOME: 'screen-welcome',
  INTRO:   'screen-intro',
  SWIPE:   'screen-swipe',
  RESULT:  'screen-result',
  SETTINGS:'screen-settings'
});
// Refactor: Lookup statt Ternaer-Kette (war 3x identisch dupliziert)
var LEVEL_CSS_CLASS = Object.freeze({
  Origin: 'tc-origin', Adventure: 'tc-adventure', Greatness: 'tc-greatness'
});
function levelCssClass(level) { return LEVEL_CSS_CLASS[level] || 'tc-origin'; }

var CFG = Object.freeze({
  STACK_DEPTH: 3, SWIPE_DISTANCE: 80, SWIPE_VELOCITY: 0.3,
  FLY_DURATION_MS: 900, LOADING_DELAY_MS: 700, ALT_LOADING_DELAY_MS: 450,
  MAX_PROPOSALS: 4, MAX_ELEMENT_ALTS: 3, HAPTIC_MS: 6, AUDIO_VOLUME: 0.4,
  MUTED_KEY: 'mistheld:muted', SETTINGS_KEY: 'mistheld:settings', EXPANDED_PREFERENCE: 0.7,
  MIN_SWIPES_FOR_SKIP: 10
});

// #44: Default-Stufe pro Theme Type laut Quellbuch
var DEFAULT_THEME_TIER = {
  'Circumstance':'Origin','Devotion':'Origin','Past':'Origin','People':'Origin',
  'Personality':'Origin','Skill or Trade':'Origin','Trait':'Origin',
  'Duty':'Adventure','Influence':'Adventure','Knowledge':'Adventure',
  'Prodigious Ability':'Adventure','Relic':'Adventure','Uncanny Being':'Adventure',
  'Destiny':'Greatness','Dominion':'Greatness','Mastery':'Greatness','Monstrosity':'Greatness',
  'Companion':'Origin','Magic':'Origin','Possessions':'Origin'
};
// Theme Types mit variabler Might-Stufe (auch im Standard-Modus veraenderbar)
var VARIABLE_THEME_TYPES = ['Companion','Magic','Possessions'];

function isVariableType(tb) { return VARIABLE_THEME_TYPES.indexOf(tb) !== -1; }

// Settings-Redesign: drei Presets statt eines Standard-Toggles.
//   beginner = nur Ursprung-Typen verfuegbar, Might fixiert; Variable optional (Ursprung)
//   standard = alle Typen auf Buch-Stufe; nur Variable in der Stufe frei
//   custom   = alle Typen, jede Might-Stufe frei
var PRESETS = Object.freeze(['beginner','standard','custom']);

// In welchem Preset ist ein Theme Type ueberhaupt verfuegbar?
// (beginner: nur Tier 'Origin' — das umfasst die Variablen, die in DEFAULT_THEME_TIER auf Origin stehen)
function isThemeTypeAvailable(tb, settings) {
  if (settings.preset === 'beginner') return DEFAULT_THEME_TIER[tb] === 'Origin';
  return true;
}
// Darf die Might-Stufe in diesem Preset veraendert werden?
function isMightEditable(tb, settings) {
  if (settings.preset === 'custom')   return true;
  if (settings.preset === 'standard') return isVariableType(tb);
  return false; // beginner: alles fixiert
}

// Aktiv-Zustaende + Stufen passend zum Preset (Default beim Wechsel/Zuruecksetzen)
function presetThemeTypes(preset) {
  var out = {};
  Object.keys(DEFAULT_THEME_TIER).forEach(function(tb){
    var lvl = isVariableType(tb) ? 'Origin' : DEFAULT_THEME_TIER[tb];
    var enabled;
    if (preset === 'beginner') {
      // nur regulaere Ursprung-Typen an; Variable optional (per Default aus)
      enabled = (DEFAULT_THEME_TIER[tb] === 'Origin') && !isVariableType(tb);
    } else {
      enabled = true; // standard & custom: alles an
    }
    out[tb] = { enabled: enabled, level: lvl };
  });
  return out;
}

var DEFAULT_SETTINGS = {
  preset: 'beginner',
  themeTypes: presetThemeTypes('beginner')
};

// Zuordnung Theme Type → visuelle Tier-Kategorie fuer Swipe-Karten-Tags.
// Hier explizit 'Variable' fuer Companion/Magic/Possessions, damit die Tags in Gold
// erscheinen (tc-variable) und nicht in einer der drei Standardfarben.
// Fuer die *echte* fachliche Default-Stufe siehe DEFAULT_THEME_TIER oben.
var TYPE_TIER = {
  'Circumstance':'Origin','Devotion':'Origin','Past':'Origin','People':'Origin',
  'Personality':'Origin','Skill or Trade':'Origin','Trait':'Origin',
  'Duty':'Adventure','Influence':'Adventure','Knowledge':'Adventure',
  'Prodigious Ability':'Adventure','Relic':'Adventure','Uncanny Being':'Adventure',
  'Destiny':'Greatness','Dominion':'Greatness','Mastery':'Greatness','Monstrosity':'Greatness',
  'Companion':'Variable','Magic':'Variable','Possessions':'Variable'
};
function tierClass(tb) {
  var t = TYPE_TIER[tb]||""; 
  return t==='Origin'?'tc-origin':t==='Adventure'?'tc-adventure':t==='Greatness'?'tc-greatness':'tc-variable';
}

// Altes Format ({standard:true/false}) auf das neue Preset-Modell abbilden
function migratePreset(p) {
  if (p && PRESETS.indexOf(p.preset) !== -1) return p.preset;
  if (p && typeof p.standard === 'boolean') return p.standard ? 'standard' : 'custom';
  return 'beginner';
}

function loadSettings() {
  try {
    var raw = localStorage.getItem(CFG.SETTINGS_KEY);
    if (!raw) return { preset: 'beginner', themeTypes: presetThemeTypes('beginner') };
    var p = JSON.parse(raw);
    var preset = migratePreset(p);
    var tt = presetThemeTypes(preset);
    if (p.themeTypes) {
      Object.keys(tt).forEach(function(tb){
        if (p.themeTypes[tb]) {
          if (typeof p.themeTypes[tb].enabled === 'boolean') tt[tb].enabled = p.themeTypes[tb].enabled;
          if (typeof p.themeTypes[tb].level === 'string')    tt[tb].level   = p.themeTypes[tb].level;
        }
      });
    }
    return { preset: preset, themeTypes: tt };
  } catch(_) { return { preset: 'beginner', themeTypes: presetThemeTypes('beginner') }; }
}
function saveSettings(s) { try { localStorage.setItem(CFG.SETTINGS_KEY, JSON.stringify(s)); } catch(_){} }

// Effektive Might-Stufe — wo nicht editierbar, gilt die fixierte Buch-Stufe (Variable: Ursprung)
function effectiveLevel(tb, settings) {
  if (!isMightEditable(tb, settings)) {
    return isVariableType(tb) ? 'Origin' : DEFAULT_THEME_TIER[tb];
  }
  return (settings.themeTypes[tb] || {}).level || DEFAULT_THEME_TIER[tb];
}
function isThemeTypeEnabled(tb, settings) {
  if (!isThemeTypeAvailable(tb, settings)) return false;
  return (settings.themeTypes[tb] || {}).enabled !== false;
}
function getEnabledThemeTypes(settings) {
  return Object.keys(DEFAULT_THEME_TIER).filter(function(tb){
    return isThemeTypeEnabled(tb, settings);
  });
}

var state = {
  cardIndex:0, shuffledCards:[], swipes:[], affinityScores:{}, hookCounts:{},
  proposals:[], proposalIndex:0, busy:false, edits:{}, hero:null,
  settingsReturn: SCREENS.WELCOME
};

var $ = function(id){ return document.getElementById(id); };
var $$ = function(sel){ return document.querySelectorAll(sel); };

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, function(m){
    return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m];
  });
}
function capitalizeFirst(s) { if(!s) return s; return s.charAt(0).toUpperCase()+s.slice(1); }
function displayTag(s) { return escapeHtml(capitalizeFirst(s)); }
function shuffleArray(a) { for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t;} return a; }
function tagText(e) { return typeof e==='string'?e:e.text; }
function isExpanded(e) { return typeof e==='object'&&e&&e.expanded===true; }

function pickWithExpansionPreference(arr, n) {
  var pool=arr.slice(), out=[];
  var target=Math.min(n,pool.length);
  while(out.length<target&&pool.length>0) {
    var ei=pool.map(function(e,i){return isExpanded(e)?i:-1;}).filter(function(i){return i>=0;});
    var idx;
    if(ei.length>0&&Math.random()<CFG.EXPANDED_PREFERENCE) idx=ei[Math.floor(Math.random()*ei.length)];
    else idx=Math.floor(Math.random()*pool.length);
    var e=pool.splice(idx,1)[0];
    out.push({text:tagText(e), expanded:isExpanded(e), hooks:tagHooks(e)});
  }
  return out;
}

function displayMight(l)    { return STRINGS.might[l]     || l; }
function displayThemebook(n){ return STRINGS.themebooks[n] || n; }

function initStrings() {
  document.title = STRINGS.pageTitle;
  document.querySelector('.welcome-mark').textContent  = STRINGS.welcome.mark;
  document.querySelector('.welcome-title').textContent = STRINGS.welcome.title;
  if($('btn-start')) $('btn-start').textContent = STRINGS.welcome.btnStart;
  if($('btn-no'))   $('btn-no').setAttribute('aria-label',   STRINGS.swipe.ariaNo);
  if($('btn-undo')) $('btn-undo').setAttribute('aria-label', STRINGS.swipe.ariaUndo);
  if($('btn-yes'))  $('btn-yes').setAttribute('aria-label',  STRINGS.swipe.ariaYes);
  if($('btn-skip')) $('btn-skip').setAttribute('aria-label', STRINGS.swipe.ariaSkip);
  document.querySelector('#screen-settings h2').textContent = STRINGS.settings.heading;
  if($('btn-settings-back')) $('btn-settings-back').setAttribute('aria-label', STRINGS.settings.ariaBack);
  if($('btn-settings'))      $('btn-settings').setAttribute('aria-label',      STRINGS.settings.ariaOpen);
  // Settings-Redesign: Preset-Segmente, Schnellaktionen, Titel
  if($('settings-preset-intro')) $('settings-preset-intro').textContent = STRINGS.settings.presetIntro;
  var _seg = $('settings-preset-modes');
  if(_seg) _seg.querySelectorAll('.intro-mode .intro-mode-name').forEach(function(n){ n.textContent = STRINGS.settings.presets[n.parentNode.dataset.preset]; });
  var _quick = $('settings-tt-quick');
  if(_quick) _quick.querySelectorAll('.tt-quick-btn').forEach(function(b){ b.textContent = STRINGS.settings.quick[b.dataset.act]; });
  if($('loading-text')) $('loading-text').textContent = STRINGS.loading.default;
  if($('hb-save'))    $('hb-save').textContent    = STRINGS.result.btnAccept;
  if($('hb-restart')) $('hb-restart').textContent = STRINGS.result.btnRestart;
  if($('hb-edit'))    $('hb-edit').textContent    = STRINGS.result.btnEdit;
  if($('hb-done'))    $('hb-done').textContent    = STRINGS.result.btnDone;
}

// #37 fix: Animation beim Zurück-Navigieren unterbinden
function show(screenId, suppressAnim) {
  $$('.screen').forEach(function(s){s.classList.remove('active');});
  var el = $(screenId);
  if (suppressAnim) {
    el.style.animation = 'none';
    el.getBoundingClientRect(); // reflow
    el.style.animation = '';
  }
  el.classList.add('active');
  var sb=$('btn-settings');
  // Gear nur auf der Startseite (im Zwischenschritt über den Inline-Link erreichbar)
  if(sb) sb.style.display=screenId===SCREENS.WELCOME?'':'none';
  // Mute-Button auf Ergebnis- UND Zwischenschritt-Seite ausblenden
  var mb=$('btn-mute');
  if(mb) mb.style.display=(screenId===SCREENS.RESULT||screenId===SCREENS.INTRO)?'none':'';
}
function showLoading(t) { $('loading-text').textContent=t||STRINGS.loading.default; $('loading').classList.add('active'); }
function hideLoading()  { $('loading').classList.remove('active'); }

var audio=$('bg-audio'), muteBtn=$('btn-mute');
function isMuted() { try{return localStorage.getItem(CFG.MUTED_KEY)==='1';}catch(_){return false;} }
function setMutedPersisted(m) { try{localStorage.setItem(CFG.MUTED_KEY,m?'1':'0');}catch(_){} }
function updateMuteUI() { muteBtn.classList.toggle('muted',audio.muted); muteBtn.setAttribute('aria-label',audio.muted?STRINGS.audio.ariaOff:STRINGS.audio.ariaOn); }
function tryPlay() { var p=audio.play(); if(p&&typeof p.catch==='function') p.catch(function(){}); }
function initAudio() {
  audio.volume=CFG.AUDIO_VOLUME; audio.muted=isMuted(); updateMuteUI(); tryPlay();
  var k=function(){tryPlay();};
  document.addEventListener('pointerdown',k,{once:true});
  document.addEventListener('touchstart',k,{once:true,passive:true});
  document.addEventListener('keydown',k,{once:true});
  document.addEventListener('click',k,{once:true});
  document.addEventListener('visibilitychange',function(){if(!document.hidden&&!audio.muted&&audio.paused) tryPlay();});
}
muteBtn.addEventListener('click',function(e){
  e.stopPropagation(); audio.muted=!audio.muted; setMutedPersisted(audio.muted); updateMuteUI();
  if(!audio.muted&&audio.paused) tryPlay();
});

function applyScore(card,dir,sign) {
  var f=(dir==='yes'?1:-0.2)*sign;
  Object.entries(card.affinities||{}).forEach(function(kv){ state.affinityScores[kv[0]]=(state.affinityScores[kv[0]]||0)+f*kv[1]; });
  // Swipe-Bias: Hooks der Karte mitzaehlen (steuert spaeter Tag-/Held-Auswahl)
  (card.hooks||[]).forEach(function(h){ state.hookCounts[h]=(state.hookCounts[h]||0)+f; });
}

/* =====================================================
   SWIPE
===================================================== */
// #47: Diversifizierende Sortierung — erste N Karten decken moeglichst viele Theme-Types ab
function diversifyFirstN(cards, n) {
  var pool = shuffleArray(cards.slice());
  var picked = [], typeCount = {};
  while (picked.length < n && pool.length > 0) {
    var bestIdx = 0, bestScore = Infinity;
    for (var i = 0; i < pool.length; i++) {
      var types = Object.keys(pool[i].affinities || {});
      if (types.length === 0) continue;
      var maxC = 0;
      for (var j = 0; j < types.length; j++) {
        var c = typeCount[types[j]] || 0;
        if (c > maxC) maxC = c;
      }
      if (maxC < bestScore) { bestScore = maxC; bestIdx = i; }
    }
    var card = pool.splice(bestIdx, 1)[0];
    Object.keys(card.affinities || {}).forEach(function(t){
      typeCount[t] = (typeCount[t] || 0) + 1;
    });
    picked.push(card);
  }
  return picked.concat(pool);
}

function startSwipe() {
  state.cardIndex=0; state.swipes=[]; state.affinityScores={}; state.hookCounts={};
  state.proposals=[]; state.proposalIndex=0; state.edits={}; state.hero=null; state.busy=false;
  state.shuffledCards = diversifyFirstN(PHASES[0].cards, CFG.MIN_SWIPES_FOR_SKIP);
  document.body.classList.add('swipe-active');
  show(SCREENS.SWIPE);
  renderCard();
}

// Cache + Loader für Karten-Illustrationen.
// IMG_CACHE: src -> 'ok' | 'bad'. IMG_PENDING: laufende Ladevorgänge (dedupe).
var IMG_CACHE = {};
var IMG_PENDING = {};
var IMG_PRELOAD_AHEAD = 6; // wie viele kommende Karten-Bilder vorgewärmt werden
function loadImage(src, cb) {
  if (!src) { if (cb) cb(false); return; }
  if (IMG_CACHE[src] === 'ok')  { if (cb) cb(true);  return; }
  if (IMG_CACHE[src] === 'bad') { if (cb) cb(false); return; }
  if (IMG_PENDING[src]) { if (cb) IMG_PENDING[src].push(cb); return; }
  IMG_PENDING[src] = cb ? [cb] : [];
  var pre = new Image();
  pre.onload = function(){ IMG_CACHE[src]='ok'; var cbs=IMG_PENDING[src]||[]; delete IMG_PENDING[src]; cbs.forEach(function(f){f(true);}); };
  pre.onerror = function(){ IMG_CACHE[src]='bad'; var cbs=IMG_PENDING[src]||[]; delete IMG_PENDING[src]; cbs.forEach(function(f){f(false);}); };
  pre.src = src;
}
function renderCard() {
  var stage=$('card-stage');
  stage.querySelectorAll('.card:not(.abandoned)').forEach(function(c){c.remove();});
  if(state.cardIndex>=state.shuffledCards.length) { finishSwiping(); return; }
  $('card-counter').textContent = STRINGS.swipe.cardCounter(state.cardIndex+1, state.shuffledCards.length);
  $('btn-undo').disabled = !canUndo();
  // #47: Skip-Button erst nach Mindestanzahl Swipes
  var skipBtn = $('btn-skip');
  if (skipBtn) {
    var done = state.cardIndex;
    skipBtn.style.display = done >= CFG.MIN_SWIPES_FOR_SKIP ? '' : 'none';
  }
  for(var i=CFG.STACK_DEPTH-1;i>=0;i--) {
    var idx=state.cardIndex+i;
    if(idx>=state.shuffledCards.length) continue;
    var card=state.shuffledCards[idx];
    var el=document.createElement('div');
    el.className='card'+(i===0?' front':' behind behind-'+i);
    el.style.zIndex=String(10-i);
    // #42 + #44: Theme-Type Hinweise (deaktivierte Theme Types ausblenden)
    // footBand = Pergament-Fußband (Text-Layout); scrimThemes = im Bild integriert (Vollbild)
    var footBand = '', scrimThemes = '';
    if (i === 0 && card.affinities) {
      var _settings = loadSettings();
      var sorted = Object.entries(card.affinities)
        .filter(function(kv){ return isThemeTypeEnabled(kv[0], _settings); })
        .sort(function(a,b){return b[1]-a[1];}).slice(0,3);
      if (sorted.length > 0) {
        var chips = sorted.map(function(kv){
          return '<span class="card-theme-tag '+tierClass(kv[0])+'">'+escapeHtml(displayThemebook(kv[0]))+'</span>';
        }).join('');
        var label = escapeHtml(STRINGS.swipe.possibleThemesLabel);
        footBand = '<div class="card-foot">'+
          '<div class="card-foot-label">'+label+'</div>'+
          '<div class="card-themes">'+chips+'</div></div>';
        scrimThemes = '<div class="card-scrim-label">'+label+'</div>'+
          '<div class="card-themes">'+chips+'</div>';
      }
    }
    // Archetypen-Zeile: kompakte Helden-Beispiele (nur Front-Karte, falls vorhanden)
    var archetypesHtml = '';
    if (i === 0 && card.examples && card.examples.length) {
      archetypesHtml = '<div class="card-archetypes">'+
        '<span class="card-arch-label">'+escapeHtml(STRINGS.swipe.examplesLabel)+'</span> '+
        card.examples.map(function(ex){ return escapeHtml(ex); }).join(' · ')+
      '</div>';
    }
    var overlays =
      '<div class="card-decision-overlay yes">'+escapeHtml(STRINGS.swipe.decisionYes)+'</div>'+
      '<div class="card-decision-overlay no">'+escapeHtml(STRINGS.swipe.decisionNo)+'</div>';
    // Text-Layout (Standard, ohne Bild)
    var textInner =
      '<div class="card-band">'+
        '<span class="card-eyebrow">'+escapeHtml(STRINGS.swipe.inspirationLabel)+'</span>'+
      '</div>'+
      '<div class="card-body">'+
        '<div class="card-prompt">'+
          '<div class="card-title">'+escapeHtml(card.title)+'</div>'+
          '<div class="card-divider" aria-hidden="true"><span class="card-divider-mark">❖</span></div>'+
          '<div class="card-text">'+escapeHtml(card.text)+'</div>'+
        '</div>'+
        archetypesHtml+
      '</div>'+
      footBand;
    // Vollbild-Layout (mit Illustration): Bild füllt die Karte; Titel + Archetypen
    // + Theme-Typen alle im unteren Verlauf, kein separates Fußband.
    var photoInner =
      '<div class="card-photo">'+
        '<img src="'+encodeURI(card.image||'')+'" alt="">'+
        '<span class="card-photo-eyebrow">'+escapeHtml(STRINGS.swipe.inspirationLabel)+'</span>'+
        '<div class="card-scrim">'+
          '<div class="card-title">'+escapeHtml(card.title)+'</div>'+
          archetypesHtml+
          scrimThemes+
        '</div>'+
      '</div>';
    // Bild nur zeigen, wenn bereits geladen (synchron) — sonst Text-Layout.
    // Overlays bleiben außerhalb von .card-content (attachSwipe cacht ihre Refs);
    // beim Upgrade wird nur der Inhalt von .card-content getauscht.
    var useImageNow = card.image && IMG_CACHE[card.image] === 'ok';
    el.innerHTML = overlays + '<div class="card-content">' + (useImageNow ? photoInner : textInner) + '</div>';
    if(i===0) { attachSwipe(el); if(state.cardIndex===0&&!state.swipes.length) el.classList.add('card-hint'); }
    stage.appendChild(el);
    // NUR die Front-Karte stuft sich bei spätem Laden selbst hoch — und nur, wenn
    // sie noch die aktive (verbundene, nicht weggewischte) Front-Karte ist.
    // Hintere/abfliegende Karten mutieren NIE asynchron, sonst blitzen Bilder
    // kommender Karten im Stapel auf.
    if (i === 0 && card.image && !useImageNow) {
      (function(frontEl, html){
        loadImage(card.image, function(ok){
          if (!ok || !frontEl.isConnected) return;
          if (!frontEl.classList.contains('front') || frontEl.classList.contains('abandoned')) return;
          var c = frontEl.querySelector('.card-content'); if (c) c.innerHTML = html;
        });
      })(el, photoInner);
    }
  }
  // Kommende Karten-Bilder im Hintergrund vorwärmen (nur Cache, kein DOM), damit
  // die nächsten Karten beim Aufdecken sofort als Bild erscheinen — ohne Flackern.
  for (var p = 0; p < IMG_PRELOAD_AHEAD; p++) {
    var pc = state.shuffledCards[state.cardIndex + p];
    if (pc && pc.image) loadImage(pc.image);
  }
}

function canUndo() { return state.swipes.length > 0; }

function adaptiveResort() {
  if(state.cardIndex<2||state.cardIndex>=state.shuffledCards.length) return;
  var pp={};
  state.swipes.filter(function(s){return s.dir==='yes';}).forEach(function(s){
    Object.entries(s.card.affinities||{}).forEach(function(kv){ pp[kv[0]]=(pp[kv[0]]||0)+kv[1]; });
  });
  if(!Object.keys(pp).length) return;
  var seen=state.shuffledCards.slice(0,state.cardIndex);
  var rem=state.shuffledCards.slice(state.cardIndex);
  var sc=function(c){ return Object.entries(c.affinities||{}).reduce(function(s,kv){return s+(pp[kv[0]]||0)*kv[1];},0); };
  rem.sort(function(a,b){return sc(b)-sc(a);});
  state.shuffledCards=seen.concat(rem);
}

function attachSwipe(el) {
  var startX=0,dx=0,dragging=false,lastX=0,lastTime=0,velocityX=0,activePtr=null;
  var yesEl=el.querySelector('.yes'), noEl=el.querySelector('.no');
  var upd=function(){
    if(dx>8){yesEl.style.opacity=String(Math.min(1,(dx-8)/60));noEl.style.opacity='0';}
    else if(dx<-8){noEl.style.opacity=String(Math.min(1,(-dx-8)/60));yesEl.style.opacity='0';}
    else{yesEl.style.opacity='0';noEl.style.opacity='0';}
  };
  el.addEventListener('pointerdown',function(e){
    if(el.classList.contains('abandoned')||activePtr!==null) return;
    el.classList.remove('card-hint'); activePtr=e.pointerId;
    try{el.setPointerCapture(e.pointerId);}catch(_){}
    dragging=true; el.classList.add('dragging'); startX=lastX=e.clientX; lastTime=performance.now(); dx=0; velocityX=0;
  });
  el.addEventListener('pointermove',function(e){
    if(!dragging||e.pointerId!==activePtr) return; if(e.cancelable) e.preventDefault();
    var now=performance.now(),dt=now-lastTime;
    if(dt>0) velocityX=velocityX*0.5+((e.clientX-lastX)/dt)*0.5;
    lastX=e.clientX; lastTime=now; dx=e.clientX-startX;
    el.style.transform='translate3d('+dx+'px,0,0) rotate('+Math.max(-18,Math.min(18,dx*0.06))+'deg)';
    upd();
  },{passive:false});
  var onUp=function(e){
    if(!dragging||e.pointerId!==activePtr) return;
    dragging=false; activePtr=null; el.classList.remove('dragging');
    try{el.releasePointerCapture(e.pointerId);}catch(_){}
    var iy=dx>CFG.SWIPE_DISTANCE||(velocityX>CFG.SWIPE_VELOCITY&&dx>4);
    var in_=dx<-CFG.SWIPE_DISTANCE||(velocityX<-CFG.SWIPE_VELOCITY&&dx<-4);
    if(iy) flyOut(el,'yes'); else if(in_) flyOut(el,'no');
    else { el.style.transform='translate3d(0,0,0) rotate(0deg)'; yesEl.style.opacity='0'; noEl.style.opacity='0'; }
  };
  el.addEventListener('pointerup',onUp); el.addEventListener('pointercancel',onUp);
}
function flyOut(el,dir) {
  if(el.classList.contains('abandoned')) return;
  el.classList.remove('card-hint'); el.classList.add('abandoned',dir==='yes'?'gone-right':'gone-left');
  try{if(navigator.vibrate) navigator.vibrate(CFG.HAPTIC_MS);}catch(_){}
  decide(dir); renderCard(); setTimeout(function(){el.remove();},CFG.FLY_DURATION_MS+80);
}
function decide(dir) {
  var c=state.shuffledCards[state.cardIndex]; if(!c) return;
  applyScore(c,dir,+1); state.swipes.push({card:c,dir:dir}); state.cardIndex++; adaptiveResort();
}
function programmaticDecide(dir) { var el=$('card-stage').querySelector('.card.front:not(.abandoned)'); if(el) flyOut(el,dir); }
function undoLast() {
  if(!canUndo()) return;
  var l=state.swipes.pop(); applyScore(l.card,l.dir,-1); state.cardIndex=Math.max(0,state.cardIndex-1); renderCard();
}

// #47: Swipe-Prozess fruehzeitig beenden
function skipRemainingSwipes() {
  if (state.cardIndex < CFG.MIN_SWIPES_FOR_SKIP) return;
  // Setze cardIndex auf Ende, damit finishSwiping() triggert
  state.cardIndex = state.shuffledCards.length;
  // Ausstehende Karte ggf. entfernen
  var stage = $('card-stage');
  stage.querySelectorAll('.card:not(.abandoned)').forEach(function(c){c.remove();});
  finishSwiping();
}

function pickBestFrom(list, exclude) {
  var cands=list.filter(function(tb){return !(exclude||[]).includes(tb);});
  var pool=cands.length?cands:list;
  return pool.reduce(function(best,tb){
    return (state.affinityScores[tb]||0)>(state.affinityScores[best]||-Infinity)?tb:best;
  },pool[0]);
}
function pickRandomFrom(list) { return list[Math.floor(Math.random()*list.length)]; }
function pickQuestWithExp(pool) {
  var ex=pool.filter(function(q){return q.expanded;});
  if(ex.length>0&&Math.random()<CFG.EXPANDED_PREFERENCE) return ex[Math.floor(Math.random()*ex.length)];
  return pool[Math.floor(Math.random()*pool.length)];
}

/* =====================================================
   SWIPE-BIAS: Hooks eines Tags/Quests gegen die geswipten hookCounts gewichten.
   Nur positive hookCounts zaehlen (gemochte Themen ziehen an; gemiedene 0).
===================================================== */
function tagHooks(e){ return (e && typeof e==='object' && Array.isArray(e.hooks)) ? e.hooks : []; }
function hookScore(e){
  var hs=tagHooks(e), sc=0;
  for(var i=0;i<hs.length;i++){ sc += Math.max(0, state.hookCounts[hs[i]]||0); }
  return sc;
}
function weightedPickIndex(weights){
  var total=weights.reduce(function(a,b){return a+b;},0);
  if(total<=0) return Math.floor(Math.random()*weights.length);
  var r=Math.random()*total;
  for(var i=0;i<weights.length;i++){ r-=weights[i]; if(r<=0) return i; }
  return weights.length-1;
}
// Tag-Auswahl: ohne Hook-Signal exakt wie bisher (Expanded-Preference), sonst hook-gewichtet
function pickWithSwipeBias(arr, n){
  var hasSignal = arr.some(function(e){ return hookScore(e) > 0; });
  if(!hasSignal) return pickWithExpansionPreference(arr, n);
  var pool=arr.slice(), out=[], target=Math.min(n,pool.length);
  while(out.length<target && pool.length>0){
    var weights=pool.map(function(e){ return 1 + 2.5*hookScore(e) + (isExpanded(e)?0.6:0); });
    var idx=weightedPickIndex(weights);
    var e=pool.splice(idx,1)[0];
    out.push({text:tagText(e), expanded:isExpanded(e), hooks:tagHooks(e)});
  }
  return out;
}
// Quest-Auswahl analog (Quests sind Objekte {title,description,expanded?,hooks?})
function pickQuestWithBias(pool){
  var hasSignal = pool.some(function(q){ return hookScore(q) > 0; });
  if(!hasSignal) return pickQuestWithExp(pool);
  var weights=pool.map(function(q){ return 1 + 2.5*hookScore(q) + (q.expanded?0.6:0); });
  return pool[weightedPickIndex(weights)];
}
// Einzelnes Element hook-gewichtet ziehen (String-Pool oder {text,hooks}-Pool, z. B. Held-Pools)
function pickOneWithBias(arr){
  var hasSignal = arr.some(function(e){ return hookScore(e) > 0; });
  if(!hasSignal) return arr[Math.floor(Math.random()*arr.length)];
  var weights=arr.map(function(e){ return 1 + 2.5*hookScore(e); });
  return arr[weightedPickIndex(weights)];
}
// Titel-Bündel hook-gewichtet ziehen (gibt das ganze Bündel inkl. powerTags/weaknessTags/quests zurück).
// Der Titel ist der Anker — alle Tags/Quests werden danach aus DIESEM Bündel gezogen.
function pickTitleWithBias(titles){
  var hasSignal = titles.some(function(t){ return hookScore(t) > 0; });
  if(!hasSignal) return titles[Math.floor(Math.random()*titles.length)];
  var weights=titles.map(function(t){ return 1 + 2.5*hookScore(t); });
  return titles[weightedPickIndex(weights)];
}
// #44: Tag-Pools fuer Stufen-Abweichungen
var TIER_DEVIATION_TAGS = {
  Origin:    ['unauffällig','alltäglich','schlicht','gewohnt','unscheinbar','leise','vertraut','bescheiden'],
  Adventure: ['geübt','gewichtig','bemerkenswert','geprägt','gestählt','erfahren','geachtet','geschult'],
  Greatness: ['legendär','uralt','unwirklich','mächtig','verflucht','gesegnet','strahlend','furchteinflößend']
};
function generateTierDeviationTag(level) {
  var pool = TIER_DEVIATION_TAGS[level] || TIER_DEVIATION_TAGS.Origin;
  return { text: pool[Math.floor(Math.random()*pool.length)], expanded: false };
}

function generateTheme(name, settings) {
  var tb=THEMEBOOKS[name];
  var entry=pickTitleWithBias(tb.titles);              // Titel-Bündel (Anker)
  var titleTag={text:entry.text, expanded:false, hooks:tagHooks(entry)};
  var powerTags=pickWithSwipeBias(entry.powerTags,2);  // aus DEM Bündel
  var weaknessTag=pickWithSwipeBias(entry.weaknessTags,1)[0];
  var quest=pickQuestWithBias(entry.quests);
  var type=effectiveLevel(name, settings);
  // #44: Wenn die Might-Stufe von der Quellbuch-Default abweicht → zusaetzlichen Stufen-Tag
  var tierTag = null;
  if (type !== DEFAULT_THEME_TIER[name]) {
    tierTag = generateTierDeviationTag(type);
  }
  // _titleEntry merken: Einzel-Re-Rolls von Power/Weakness/Quest ziehen aus diesem Bündel
  return {type:type,themebook:name,titleTag:titleTag,powerTags:powerTags,weaknessTag:weaknessTag,quest:quest,tierTag:tierTag,_titleEntry:entry};
}
// #44: Proposal-Generation aus aktivierten Theme Types
function generateProposal(mode, base) {
  mode=mode||'initial';
  var s=loadSettings();
  var enabled = getEnabledThemeTypes(s);
  if (enabled.length === 0) enabled = ['People','Skill or Trade','Trait','Personality']; // Fallback
  var n = 4;
  var used = [];
  var tbs = [];
  for (var i = 0; i < n; i++) {
    var avail = enabled.filter(function(tb){ return used.indexOf(tb) === -1; });
    if (avail.length === 0) avail = enabled.slice();
    var pick;
    if (mode === 'tags-only' && base && base.themes[i]) {
      pick = base.themes[i].themebook;
    } else if (mode === 'new-themebooks' && base && base.themes[i]) {
      var without = avail.filter(function(tb){ return tb !== base.themes[i].themebook; });
      pick = pickBestFrom(without.length ? without : avail);
    } else if (mode === 'initial') {
      pick = pickBestFrom(avail);
    } else {
      pick = pickRandomFrom(avail);
    }
    used.push(pick);
    tbs.push(pick);
  }
  return {mode:mode,themes:tbs.map(function(tb){return generateTheme(tb,s);})};
}

function finishSwiping() {
  document.body.classList.remove('swipe-active');
  state.busy=true; showLoading(STRINGS.loading.generating);
  setTimeout(function(){
    state.proposals=[generateProposal('initial')]; state.proposalIndex=0; state.edits={};
    state.hero=generateHero(); state.hero.story=composeHeroStory(); setHbEditing(false);
    show(SCREENS.RESULT);
    requestAnimationFrame(function(){
      renderHeldenblatt(); hideLoading(); state.busy=false;
    });
  }, CFG.LOADING_DELAY_MS);
}

/* HELD-GENERATOR */
// Held-Pool nach Index hook-gewichtet ziehen (hooksByIndex parallel zum Pool-Array)
function pickHeroEntry(arr, hooksByIndex){
  var score=function(i){ var hs=(hooksByIndex&&hooksByIndex[i])||[], s=0; for(var j=0;j<hs.length;j++) s+=Math.max(0,state.hookCounts[hs[j]]||0); return s; };
  var hasSignal=false; for(var i=0;i<arr.length;i++){ if(score(i)>0){ hasSignal=true; break; } }
  if(!hasSignal) return arr[Math.floor(Math.random()*arr.length)];
  var weights=arr.map(function(_,i){ return 1 + 2.5*score(i); });
  return arr[weightedPickIndex(weights)];
}
function generateHero() {
  return {
    firstName:   pickRandomFrom(HERO_FIRSTNAMES),
    epithet:     pickRandomFrom(HERO_EPITHETS),
    title:       pickHeroEntry(HERO_TITLES, HERO_TITLE_HOOKS),
    description: pickHeroEntry(HERO_DESCRIPTIONS, HERO_DESC_HOOKS)
  };
}
function rerollHeroPart(part) {
  var pools={firstName:HERO_FIRSTNAMES,epithet:HERO_EPITHETS,title:HERO_TITLES,description:HERO_DESCRIPTIONS};
  var hookMaps={title:HERO_TITLE_HOOKS, description:HERO_DESC_HOOKS};
  var v, a=0;
  do { v = hookMaps[part] ? pickHeroEntry(pools[part], hookMaps[part]) : pickRandomFrom(pools[part]); a++; } while(v===state.hero[part]&&a<5);
  state.hero[part]=v;
}

/* THEME-EDITS */
function editKey(ti,k)    { return 't'+ti+'-'+k; }
function getEdit(ti,k)    { return state.edits[editKey(ti,k)]; }
function getCurrentVal(ti,k,fb) { var e=getEdit(ti,k); if(!e||e.index===0) return fb; return e.alts[e.index-1]; }
function getDisplayTheme(ti) {
  var base=state.proposals[state.proposalIndex].themes[ti];
  var te=getEdit(ti,'theme');
  var tb=(te&&te.index>0)?te.alts[te.index-1]:base;
  return {
    type:tb.type, themebook:tb.themebook,
    titleTag:   getCurrentVal(ti,'title',   tb.titleTag),
    powerTags: [getCurrentVal(ti,'pow0',    tb.powerTags[0]), getCurrentVal(ti,'pow1',tb.powerTags[1])],
    weaknessTag:getCurrentVal(ti,'weakness',tb.weaknessTag),
    quest:      getCurrentVal(ti,'quest',   tb.quest),
    tierTag:    tb.tierTag || null
  };
}
function addAlt(ti,k,v) {
  var key=editKey(ti,k);
  if(!state.edits[key]) state.edits[key]={alts:[],index:0};
  var e=state.edits[key];
  if(e.alts.length>=CFG.MAX_ELEMENT_ALTS) return;
  e.alts.push(v); e.index=e.alts.length;
}
function clearThemeEdits(ti) { ['title','pow0','pow1','weakness','quest'].forEach(function(k){delete state.edits[editKey(ti,k)];}); }
// Aktuell zugrundeliegendes Theme-Objekt (Basis oder Theme-Alt) — trägt _titleEntry für Bündel-Re-Rolls.
function getBaseTheme(ti){
  var base=state.proposals[state.proposalIndex].themes[ti];
  var te=getEdit(ti,'theme');
  return (te&&te.index>0)?te.alts[te.index-1]:base;
}
function handleReroll(ti,k) {
  var s=loadSettings();
  // Titel ist der Anker: Titel neu = ganzes Konzept neu (Titel + Power/Weakness + Quest).
  if (k==='theme' || k==='title') {
    var nv=generateTheme(getBaseTheme(ti).themebook,s);
    clearThemeEdits(ti);
    addAlt(ti,'theme',nv);
    return;
  }
  var entry=getBaseTheme(ti)._titleEntry;
  var v;
  if      (k==='pow0'||k==='pow1') { v=pickWithSwipeBias(entry.powerTags,1)[0]; }
  else if (k==='weakness')         { v=pickWithSwipeBias(entry.weaknessTags,1)[0]; }
  else if (k==='quest')            { v=pickQuestWithBias(entry.quests); }
  if(v!==undefined) addAlt(ti,k,v);
}
function handleNavigate(ti,k,dir) {
  var e=getEdit(ti,k); if(!e) return;
  e.index=Math.max(0,Math.min(e.alts.length,e.index+dir));
}

/* =====================================================
   ERGEBNIS-BEREICH: Heldenblatt (eine scrollbare Charakterblatt-Seite)
===================================================== */
// Bearbeiten-Modus: blendet die Edit-Federn ein und tauscht die Aktionsleiste (Fertig).
function setHbEditing(on){
  var sc=$('screen-result'); if(!sc) return;
  sc.classList.toggle('hb-editing', !!on);
}

// Story-Bausteine: clientseitig montiert, hook-getaggt. Bewusst pronomen-arm
// gehalten (kein er/sie auf den Helden), damit die Montage grammatisch trägt.
var STORY_FRAGMENTS = {
  adel:        ['Edles Blut öffnet Türen — und macht zugleich zur Zielscheibe.'],
  'außenseiter':['Dazugehören war nie einfach; manche Wege geht man besser allein.'],
  geheimnis:   ['Geheimnisse folgen wie Schatten, die sich nicht abschütteln lassen.'],
  magie:       ['Etwas Übernatürliches liegt in der Luft, wohin der Weg auch führt.'],
  wissen:      ['Wissen, das andere meiden, wiegt schwer auf den Schultern.'],
  handwerk:    ['Geschickte Hände finden überall Arbeit — und stillen Respekt.'],
  glaube:      ['Ein Schwur wurde geleistet, und solche Schwüre brechen nicht leicht.'],
  kampf:       ['Der Krieg ist vorbei, doch im Inneren endet er nie ganz.'],
  natur:       ['Die Wildnis ist näher und vertrauter als jede Stadtmauer.'],
  stadt:       ['In den Gassen kennt man jeden Namen und jede offene Schuld.'],
  verlust:     ['Der Verlust sitzt tief; manche Wunden vernarben nie ganz.'],
  macht:       ['Macht ruft nach mehr Macht — und zieht ebenso viele Neider an.'],
  fahrend:     ['Kein Ort hält lange; die offene Straße ruft immer wieder.'],
  schicksal:   ['Ein altes Schicksal wartet — ob gewollt oder nicht.']
};
var STORY_CLOSINGS = [
  'Wie diese Geschichte endet? Sie hat gerade erst begonnen.',
  'Erzählt ist diese Geschichte damit noch lange nicht.',
  'Was bleibt, ist ein Name, den man sich merken wird.'
];
// Top-Hooks aus den vier Themes (gewichtet) als Story-Grundlage
function storyHooksFromThemes(n){
  var counts={};
  state.proposals[state.proposalIndex].themes.forEach(function(_,ti){
    var dt=getDisplayTheme(ti);
    [dt.titleTag, dt.powerTags[0], dt.powerTags[1]].forEach(function(t){
      (((t&&t.hooks))||[]).forEach(function(h){ counts[h]=(counts[h]||0)+1; });
    });
  });
  return Object.keys(counts).sort(function(a,b){return counts[b]-counts[a];}).slice(0,n);
}
function composeHeroStory(){
  var h=state.hero, t0=getDisplayTheme(0);
  var parts=[ h.firstName+' '+h.epithet+' — '+capitalizeFirst(t0.titleTag.text)+'.' ];
  storyHooksFromThemes(2).forEach(function(hk){
    var pool=STORY_FRAGMENTS[hk];
    if(pool&&pool.length) parts.push(pool[Math.floor(Math.random()*pool.length)]);
  });
  parts.push(STORY_CLOSINGS[Math.floor(Math.random()*STORY_CLOSINGS.length)]);
  return parts.join(' ');
}

// --- Sektions-Bausteine (modular; Backpack/Fellowship lassen sich hier einschieben) ---
function hbHeroSection(){
  var h=state.hero;
  return '<div class="hb-hero">'+
    '<button class="hb-edit" data-edit="hero" type="button" aria-label="Held bearbeiten">'+FEATHER_SVG+'</button>'+
    '<div class="hb-hero-eyebrow">'+escapeHtml(STRINGS.hero.eyebrow)+'</div>'+
    '<div class="hb-hero-name">'+escapeHtml(h.firstName)+' '+escapeHtml(h.epithet)+'</div>'+
    (h.title?'<div class="hb-hero-title">'+escapeHtml(h.title)+'</div>':'')+
    '<div class="hb-hero-desc">'+escapeHtml(h.description)+'</div>'+
  '</div>';
}
function hbStorySection(){
  return '<div class="hb-module hb-story">'+
    '<button class="hb-edit" data-edit="story" type="button" aria-label="Geschichte neu würfeln">'+FEATHER_SVG+'</button>'+
    '<div class="hb-seclabel">'+escapeHtml(STRINGS.result.storyLabel)+'</div>'+
    '<div class="hb-story-text">'+escapeHtml(state.hero.story||'')+'</div>'+
  '</div>';
}
function hbThemeSection(ti){
  var dt=getDisplayTheme(ti), mc=levelCssClass(dt.type);
  // Kopfband (Might-Farbe): Theme Type links, Might-Stufe rechts — dezent.
  var headBand =
    '<div class="hb-band hb-band-head">'+
      '<span class="hb-band-type">'+escapeHtml(displayThemebook(dt.themebook))+'</span>'+
      '<span class="hb-band-might">'+escapeHtml(displayMight(dt.type))+'</span>'+
    '</div>';
  // Mitte (neutral): Titel-Tag (groß) + Power Tags + Weakness.
  var mid = '<div class="hb-theme-mid">'+
      '<div class="hb-titletag">'+displayTag(dt.titleTag.text)+'</div>'+
      '<div class="hb-powertag">'+displayTag(dt.powerTags[0].text)+'</div>'+
      '<div class="hb-powertag">'+displayTag(dt.powerTags[1].text)+'</div>'+
      (dt.tierTag?'<div class="hb-powertag hb-tiertag">'+displayTag(dt.tierTag.text)+'</div>':'')+
      '<div class="hb-weakness">'+displayTag(dt.weaknessTag.text)+'</div>'+
    '</div>';
  // Fußband (Might-Farbe): Quest.
  var footBand =
    '<div class="hb-band hb-band-foot">'+
      '<div class="hb-quest-label">'+escapeHtml(STRINGS.result.questLabel)+'</div>'+
      '<div class="hb-quest-title">„'+escapeHtml(dt.quest.title)+'“</div>'+
      '<div class="hb-quest-desc">'+escapeHtml(dt.quest.description)+'</div>'+
    '</div>';
  return '<div class="hb-theme '+mc+'">'+
    '<button class="hb-edit" data-edit="theme" data-ti="'+ti+'" type="button" aria-label="Theme bearbeiten">'+FEATHER_SVG+'</button>'+
    headBand + mid + footBand +
  '</div>';
}
function hbPlaceholder(label){
  return '<div class="hb-ph">'+
    '<div class="hb-ph-title">'+escapeHtml(label)+'</div>'+
    '<div class="hb-ph-sub">'+escapeHtml(STRINGS.result.placeholderSoon)+'</div>'+
  '</div>';
}
function hbDivider(){ return '<div class="hb-divider" aria-hidden="true"><span class="hb-divider-mark">❖</span></div>'; }
function renderHeldenblatt(){
  var scroll=$('hb-scroll'); if(!scroll) return;
  var st=scroll.scrollTop; // Scroll-Position über Re-Render erhalten
  var n=state.proposals[state.proposalIndex].themes.length;
  var inner=hbHeroSection()+hbDivider()+hbStorySection()+hbDivider()+'<div class="hb-seclabel hb-themes-label">'+escapeHtml(STRINGS.result.themesLabel)+'</div>';
  for(var i=0;i<n;i++) inner+=hbThemeSection(i);
  inner+=hbPlaceholder(STRINGS.result.backpackLabel)+hbPlaceholder(STRINGS.result.fellowshipLabel);
  // Alles vom Held-Kopf bis Backpack als ein zusammenhängender Heldenbogen
  scroll.innerHTML='<div class="hb-sheet">'+inner+'<div class="hb-sheet-grain" aria-hidden="true"></div></div>';
  scroll.scrollTop=st;
  bindHeldenblatt(scroll);
}
function bindHeldenblatt(scroll){
  scroll.querySelectorAll('.hb-edit').forEach(function(btn){
    btn.addEventListener('click', function(e){
      e.stopPropagation();
      var k=btn.dataset.edit;
      if(k==='hero') openHeroEditSheet();
      else if(k==='story'){ state.hero.story=composeHeroStory(); renderHeldenblatt(); }
      else if(k==='theme') openEditSheet(parseInt(btn.dataset.ti));
    });
  });
}

/* =====================================================
   Feder-Icon (Bearbeiten)
===================================================== */
var FEATHER_SVG ='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><line x1="16" y1="8" x2="2" y2="22"/><line x1="17.5" y1="15" x2="9" y2="15"/></svg>';

/* =====================================================
   EDIT SHEETS
===================================================== */
function openHeroEditSheet() {
  var h=state.hero, body=$('edit-sheet-body');
  function row(part,label,val){
    return '<div class="es-row">'+
      '<div class="es-row-content">'+
        '<div class="es-label">'+escapeHtml(label)+'</div>'+
        '<div class="es-value">'+escapeHtml(val)+'</div>'+
      '</div>'+
      '<button type="button" class="es-reroll-btn" data-part="'+part+'">↺ '+escapeHtml(STRINGS.hero.rerollShort)+'</button></div>';
  }
  body.innerHTML=
    '<div class="es-header"><div class="es-themebook">'+escapeHtml(STRINGS.hero.eyebrow)+'</div></div>'+
    row('firstName',  STRINGS.hero.labelFirstName,  h.firstName)+
    row('epithet',    STRINGS.hero.labelEpithet,    h.epithet)+
    row('title',      STRINGS.hero.labelTitle,      h.title)+
    row('description',STRINGS.hero.labelDescription,h.description.substring(0,55)+'…');
  body.querySelectorAll('.es-reroll-btn').forEach(function(btn){
    btn.addEventListener('click',function(){
      rerollHeroPart(btn.dataset.part); openHeroEditSheet();
      renderHeldenblatt();
    });
  });
  $('edit-sheet-overlay').classList.add('active');
}

function openEditSheet(ti) {
  var dt=getDisplayTheme(ti), body=$('edit-sheet-body');
  function row(k,label,entry){
    var isQ=k==='quest', rawText=isQ?entry.title:entry.text, isW=k==='weakness';
    var e=getEdit(ti,k), total=1+(e?e.alts.length:0), idx=e?e.index:0;
    var maxed=e?e.alts.length>=CFG.MAX_ELEMENT_ALTS:false;
    var nav=total>1?
      '<div class="es-nav">'+
        '<button type="button" class="es-nav-btn" data-ti="'+ti+'" data-k="'+k+'" data-dir="-1"'+(idx===0?' disabled':'')+'>&#8249;</button>'+
        '<span class="es-nav-pos">'+(idx+1)+' / '+total+'</span>'+
        '<button type="button" class="es-nav-btn" data-ti="'+ti+'" data-k="'+k+'" data-dir="1"'+(idx>=total-1?' disabled':'')+'>&#8250;</button>'+
      '</div>':'';
    return '<div class="es-row">'+
      '<div class="es-row-content">'+
        '<div class="es-label">'+escapeHtml(label)+'</div>'+
        '<div class="es-value'+(isW?' es-weak':'')+'">'+displayTag(rawText)+'</div>'+nav+
      '</div>'+
      '<button type="button" class="es-reroll-btn" data-ti="'+ti+'" data-k="'+k+'"'+(maxed?' disabled':'')+'>'+
        '↺ '+escapeHtml(STRINGS.hero.rerollShort)+'</button></div>';
  }
  body.innerHTML=
    '<div class="es-header"><div class="es-themebook">'+escapeHtml(displayThemebook(dt.themebook))+'</div>'+
    '<div class="es-might">'+escapeHtml(displayMight(dt.type))+'</div></div>'+
    row('theme',    STRINGS.hero.labelTitleTag,  dt.titleTag)+
    row('pow0',     STRINGS.hero.labelPower1,     dt.powerTags[0])+
    row('pow1',     STRINGS.hero.labelPower2,     dt.powerTags[1])+
    row('weakness', STRINGS.hero.labelWeakness,   dt.weaknessTag)+
    row('quest',    STRINGS.hero.labelQuest,      dt.quest)+
    '<div class="es-footer"><button type="button" class="es-full-reroll" id="es-full-reroll" data-ti="'+ti+'">'+escapeHtml(STRINGS.hero.fullReroll)+'</button></div>';
  body.querySelectorAll('.es-reroll-btn').forEach(function(btn){
    btn.addEventListener('click',function(){
      handleReroll(parseInt(btn.dataset.ti),btn.dataset.k);
      openEditSheet(ti);
      renderHeldenblatt();
    });
  });
  body.querySelectorAll('.es-nav-btn').forEach(function(btn){
    btn.addEventListener('click',function(){
      handleNavigate(parseInt(btn.dataset.ti),btn.dataset.k,parseInt(btn.dataset.dir));
      openEditSheet(ti);
      renderHeldenblatt();
    });
  });
  var fr=$('es-full-reroll');
  fr.addEventListener('click',function(){
    handleReroll(parseInt(fr.dataset.ti),'theme');
    openEditSheet(ti);
    renderHeldenblatt();
  });
  $('edit-sheet-overlay').classList.add('active');
}
function closeEditSheet() { $('edit-sheet-overlay').classList.remove('active'); }

/* PDF */
var PDF_LAYOUT={pageW:297,pageH:210,marginX:12,marginY:12,gap:4};
var PDF_COLORS={paper:[250,243,223],ink:[42,36,25],inkSoft:[91,82,64],accent:[139,58,43],gold:[169,134,70],band:[236,224,196]};
function pdfHeader(doc) {
  var L=PDF_LAYOUT,C=PDF_COLORS;
  doc.setFillColor.apply(doc,C.paper); doc.rect(0,0,L.pageW,L.pageH,'F');
  doc.setTextColor.apply(doc,C.ink); doc.setFont('helvetica','bold'); doc.setFontSize(22);
  var hn=state.hero?(state.hero.firstName+' '+state.hero.epithet):'';
  doc.text(hn?(STRINGS.pdf.header+' \u00b7 '+hn):STRINGS.pdf.header, L.marginX, L.marginY+6);
  doc.setDrawColor.apply(doc,C.gold); doc.setLineWidth(0.4);
  doc.line(L.marginX,L.marginY+9,L.pageW-L.marginX,L.marginY+9);
  if(state.hero&&state.hero.title){
    doc.setFont('helvetica','italic'); doc.setFontSize(9); doc.setTextColor.apply(doc,C.inkSoft);
    doc.text(state.hero.title, L.marginX, L.marginY+14);
  }
}
function pdfSectionLabel(doc,label,x,y) {
  doc.setFont('helvetica','bold'); doc.setFontSize(7); doc.setTextColor.apply(doc,PDF_COLORS.accent);
  doc.text(label,x+4,y); return y+4;
}
function pdfTagText(e) { return capitalizeFirst(e.text); }
function pdfThemeBlock(doc,theme,x,y,cW,cH) {
  var C=PDF_COLORS;
  doc.setDrawColor.apply(doc,C.ink); doc.setLineWidth(0.3); doc.rect(x,y,cW,cH);
  doc.setFillColor.apply(doc,C.band); doc.rect(x,y,cW,16,'F'); doc.line(x,y+16,x+cW,y+16);
  doc.setFont('helvetica','bold'); doc.setFontSize(7); doc.setTextColor.apply(doc,C.accent);
  doc.text(displayMight(theme.type).toUpperCase(),x+cW/2,y+6,{align:'center'});
  doc.setFont('helvetica','italic'); doc.setFontSize(8); doc.setTextColor.apply(doc,C.inkSoft);
  doc.text(displayThemebook(theme.themebook),x+cW/2,y+11,{align:'center'});
  doc.setFont('times','italic'); doc.setFontSize(13); doc.setTextColor.apply(doc,C.ink);
  var tl=doc.splitTextToSize(pdfTagText(theme.titleTag),cW-6);
  doc.text(tl,x+cW/2,y+22,{align:'center'}); var cy=y+22+tl.length*5+4;
  cy=pdfSectionLabel(doc,'POWER TAGS',x,cy);
  doc.setFont('times','normal'); doc.setFontSize(10); doc.setTextColor.apply(doc,C.ink);
  theme.powerTags.forEach(function(t){var ls=doc.splitTextToSize('\u2022 '+pdfTagText(t),cW-8);doc.text(ls,x+4,cy);cy+=ls.length*4.5;});
  if (theme.tierTag) {
    doc.setFont('times','italic'); doc.setFontSize(10); doc.setTextColor.apply(doc,C.gold);
    var tlt=doc.splitTextToSize('\u2022 '+pdfTagText(theme.tierTag),cW-8); doc.text(tlt,x+4,cy); cy+=tlt.length*4.5;
    doc.setTextColor.apply(doc,C.ink);
  }
  cy+=3; cy=pdfSectionLabel(doc,'WEAKNESS TAG',x,cy);
  doc.setFont('times','italic'); doc.setFontSize(10); doc.setTextColor.apply(doc,C.accent);
  var wl=doc.splitTextToSize(pdfTagText(theme.weaknessTag),cW-8); doc.text(wl,x+4,cy); cy+=wl.length*4.5+4;
  cy=pdfSectionLabel(doc,'QUEST',x,cy);
  doc.setFont('times','italic'); doc.setFontSize(10); doc.setTextColor.apply(doc,C.ink);
  var ql=doc.splitTextToSize('\u201e'+capitalizeFirst(theme.quest.title)+'\u201c',cW-8); doc.text(ql,x+4,cy); cy+=ql.length*4.5+1;
  doc.setFont('times','italic'); doc.setFontSize(8.5); doc.setTextColor.apply(doc,C.inkSoft);
  doc.text(doc.splitTextToSize(theme.quest.description,cW-8),x+4,cy);
}
function pdfFooter(doc) {
  var L=PDF_LAYOUT;
  doc.setFont('helvetica','normal'); doc.setFontSize(7); doc.setTextColor.apply(doc,PDF_COLORS.inkSoft);
  doc.text(STRINGS.pdf.footer,L.pageW-L.marginX,L.pageH-4,{align:'right'});
}
async function generatePDF() {
  if(!window.jspdf||!window.jspdf.jsPDF){alert(STRINGS.pdf.errLoad);return;}
  var prop=state.proposals[state.proposalIndex]; if(!prop) return;
  try {
    var jsPDF=window.jspdf.jsPDF;
    var doc=new jsPDF({orientation:'landscape',unit:'mm',format:'a4'});
    var L=PDF_LAYOUT;
    pdfHeader(doc);
    var cardY=L.marginY+(state.hero&&state.hero.title?20:16);
    var cW=(L.pageW-2*L.marginX-3*L.gap)/4, cH=L.pageH-cardY-L.marginY;
    prop.themes.forEach(function(_,i){pdfThemeBlock(doc,getDisplayTheme(i),L.marginX+i*(cW+L.gap),cardY,cW,cH);});
    pdfFooter(doc);
    var fn=state.hero?('mistheld-'+state.hero.firstName.toLowerCase()+'-'+state.hero.epithet.toLowerCase().replace(/\s/g,'-')+'.pdf'):STRINGS.pdf.filename;
    doc.save(fn);
  } catch(err){console.error('PDF-Fehler:',err);alert(STRINGS.pdf.errCreate);}
}

/* =====================================================
   SETTINGS (Redesign: Presets Einsteiger / Standard / Individuell)
===================================================== */
// Theme Types nach Tier gruppiert (Reihenfolge aus DEFAULT_THEME_TIER abgeleitet),
// die drei variablen Typen bilden eine eigene Gruppe am Ende.
var SETTINGS_GROUPS = (function(){
  var tiers = ['Origin','Adventure','Greatness'];
  var byTier = {}; var groups = tiers.map(function(t){ var g={ tier:t, types:[] }; byTier[t]=g; return g; });
  Object.keys(DEFAULT_THEME_TIER).forEach(function(tb){
    if (isVariableType(tb)) return;
    byTier[DEFAULT_THEME_TIER[tb]].types.push(tb);
  });
  groups.push({ tier: 'Variable', types: VARIABLE_THEME_TYPES.slice() });
  return groups;
})();

// Einklapp-Zustand der Sektionen (Default: ausgeklappt). Modul-Variable, damit
// der Zustand das vollstaendige Re-Rendern in buildSettingsUI ueberlebt.
var SETTINGS_SECTION_COLLAPSED = {};

function buildSettingsUI() {
  var s = loadSettings();

  // Preset-Auswahl (vertikale Kacheln, geteiltes Design mit dem Zwischenschritt) + Hinweis
  var seg = $('settings-preset-modes');
  if (seg) {
    seg.querySelectorAll('.intro-mode').forEach(function(b){
      var on = b.dataset.preset === s.preset;
      b.classList.toggle('on', on);
      b.setAttribute('aria-checked', on ? 'true' : 'false');
      var nameEl = b.querySelector('.intro-mode-name');
      if(nameEl) nameEl.textContent = STRINGS.settings.presets[b.dataset.preset];
    });
  }
  if ($('settings-preset-hint')) $('settings-preset-hint').textContent = STRINGS.settings.presetHints[s.preset];

  var list = $('settings-themetypes-list');
  if (!list) return;
  var levels = ['Origin','Adventure','Greatness'];
  var enabledCount = 0;
  var html = '';

  SETTINGS_GROUPS.forEach(function(group){
    var visible = group.types.filter(function(tb){ return isThemeTypeAvailable(tb, s); });
    if (visible.length === 0) return;
    var isVarGroup = group.tier === 'Variable';
    var tierCls = isVarGroup ? 'variable' : group.tier.toLowerCase();
    var collapsed = !!SETTINGS_SECTION_COLLAPSED[group.tier];
    var titleText = STRINGS.settings.ttSectionPrefix +
      (isVarGroup ? STRINGS.settings.ttVariableGroup : displayMight(group.tier));

    var rows = '';
    visible.forEach(function(tb){
      var entry = s.themeTypes[tb] || { enabled: true, level: DEFAULT_THEME_TIER[tb] };
      if (entry.enabled) enabledCount++;
      var editable = isMightEditable(tb, s);
      var effLevel = effectiveLevel(tb, s);
      var ttSafeId = tb.replace(/\s/g,'_');
      var toggleAria = ' aria-label="' + escapeHtml(displayThemebook(tb)) + ' aktivieren"';

      // Chips IMMER anzeigen; nicht waehlbare (fixierte Stufe oder Typ aus) ausgegraut
      var chips = levels.map(function(lv){
        var sel = effLevel === lv;
        var dis = !(editable && entry.enabled);
        return '<button type="button" class="tt-level-chip tc-' + lv.toLowerCase() + (sel ? ' selected' : '') + '"' +
               ' data-tt="' + tb + '" data-level="' + lv + '"' +
               ' aria-pressed="' + (sel ? 'true' : 'false') + '"' +
               (dis ? ' disabled' : '') + '>' +
               escapeHtml(displayMight(lv)) + '</button>';
      }).join('');

      rows +=
        '<div class="tt-row' + (entry.enabled ? '' : ' disabled') + '">' +
          '<div class="tt-row-top">' +
            '<input type="checkbox" class="tt-check-input" id="tt-toggle-' + ttSafeId + '" data-tt="' + tb + '"' + toggleAria + (entry.enabled ? ' checked' : '') + '>' +
            '<label class="tt-row-label" for="tt-toggle-' + ttSafeId + '"><span class="tt-check-box" aria-hidden="true"></span><span class="tt-name">' + escapeHtml(displayThemebook(tb)) + '</span></label>' +
          '</div>' +
          '<div class="tt-level-chips">' + chips + '</div>' +
        '</div>';
    });

    html +=
      '<div class="tt-section">' +
        '<button type="button" class="tt-section-head' + (collapsed ? ' collapsed' : '') + '" data-tier="' + group.tier + '" aria-expanded="' + (!collapsed) + '">' +
          '<span class="tt-section-title tc-' + tierCls + '">' + escapeHtml(titleText) + '</span>' +
          '<span class="tt-chevron" aria-hidden="true"></span>' +
        '</button>' +
        '<div class="tt-section-body' + (collapsed ? ' collapsed' : '') + '">' + rows + '</div>' +
      '</div>';
  });

  list.innerHTML = html;

  if ($('settings-consequence')) {
    $('settings-consequence').innerHTML =
      STRINGS.settings.consequence(enabledCount, Object.keys(DEFAULT_THEME_TIER).length);
  }

  // Event-Bindings (alles wird bei jedem Render neu erzeugt)
  list.querySelectorAll('.tt-section-head').forEach(function(h){
    h.addEventListener('click', function(){
      var t = h.dataset.tier;
      SETTINGS_SECTION_COLLAPSED[t] = !SETTINGS_SECTION_COLLAPSED[t];
      buildSettingsUI();
    });
  });
  list.querySelectorAll('input[type=checkbox][data-tt]').forEach(function(cb){
    cb.addEventListener('change', function(){
      var st = loadSettings();
      var tb = cb.dataset.tt;
      if (!st.themeTypes[tb]) st.themeTypes[tb] = { enabled: true, level: DEFAULT_THEME_TIER[tb] };
      st.themeTypes[tb].enabled = cb.checked;
      // Mindestens 1 verfuegbarer Theme Type muss aktiv bleiben
      if (getEnabledThemeTypes(st).length === 0) { st.themeTypes[tb].enabled = true; }
      saveSettings(st);
      buildSettingsUI();
    });
  });
  list.querySelectorAll('.tt-level-chip').forEach(function(chip){
    chip.addEventListener('click', function(){
      if (chip.disabled) return;
      var st = loadSettings();
      var tb = chip.dataset.tt;
      if (!isMightEditable(tb, st)) return;
      if (!st.themeTypes[tb]) st.themeTypes[tb] = { enabled: true, level: DEFAULT_THEME_TIER[tb] };
      st.themeTypes[tb].level = chip.dataset.level;
      saveSettings(st);
      buildSettingsUI();
    });
  });
}

// Preset wechseln: Aktiv-Zustaende + Stufen auf den Preset-Default zuruecksetzen
function setPreset(preset) {
  if (PRESETS.indexOf(preset) === -1) return;
  var st = loadSettings();
  st.preset = preset;
  st.themeTypes = presetThemeTypes(preset);
  saveSettings(st);
  buildSettingsUI();
}

// Schnellaktionen (in allen Presets verfuegbar)
function applyQuickAction(act) {
  var st = loadSettings();
  var avail = Object.keys(DEFAULT_THEME_TIER).filter(function(tb){ return isThemeTypeAvailable(tb, st); });
  if (act === 'reset') {
    st.themeTypes = presetThemeTypes(st.preset);
  } else if (act === 'all-on') {
    avail.forEach(function(tb){ st.themeTypes[tb].enabled = true; });
  } else if (act === 'all-off') {
    // mind. 1 muss aktiv bleiben → ersten verfuegbaren Typ anlassen
    avail.forEach(function(tb, i){ st.themeTypes[tb].enabled = (i === 0); });
  }
  saveSettings(st);
  buildSettingsUI();
}

function openSettings() {
  // Rücksprung-Ziel merken (Einstellungen sind von Startseite UND Zwischenschritt erreichbar)
  var active = document.querySelector('.screen.active');
  state.settingsReturn = (active && active.id) ? active.id : SCREENS.WELCOME;
  buildSettingsUI();
  show(SCREENS.SETTINGS);
}
function updateSettingsUI() { buildSettingsUI(); }

/* =====================================================
   ZWISCHENSCHRITT: Prinzip-Erklärung + Modus-Auswahl
===================================================== */
function renderIntro() {
  if($('intro-title'))     $('intro-title').textContent     = STRINGS.intro.title;
  if($('intro-text'))      $('intro-text').textContent      = STRINGS.intro.intro;
  if($('intro-modelabel')) $('intro-modelabel').textContent = STRINGS.intro.modeLabel;
  if($('intro-hint'))      $('intro-hint').textContent      = STRINGS.intro.settingsHint;
  if($('intro-settings-link')) $('intro-settings-link').textContent = STRINGS.intro.settingsLink;
  if($('btn-intro-start')) $('btn-intro-start').textContent = STRINGS.intro.cta;
  if($('btn-intro-back')) $('btn-intro-back').textContent = STRINGS.intro.back;
  var cur = loadSettings().preset;
  var modes = $('intro-modes');
  if(modes) {
    modes.querySelectorAll('.intro-mode').forEach(function(b){
      var p = b.dataset.preset, on = (p === cur);
      b.classList.toggle('on', on);
      b.setAttribute('aria-checked', on ? 'true' : 'false');
      var nameEl = b.querySelector('.intro-mode-name');
      if(nameEl) nameEl.textContent = STRINGS.settings.presets[p];
    });
  }
  // Erklärtext nur des gewählten Modus, unter den Kacheln
  if($('intro-modedesc')) $('intro-modedesc').textContent = STRINGS.intro.modeDesc[cur];
}
// Nur bei echtem Wechsel setPreset (das setzt Theme-Typen auf Preset-Default zurück);
// derselbe Modus bewahrt etwaige Detaileinstellungen aus dem Einstellungen-Screen.
function selectIntroMode(preset) {
  if(PRESETS.indexOf(preset) === -1) return;
  if(loadSettings().preset !== preset) setPreset(preset);
  renderIntro();
}
// Settings werden bei jeder Aenderung sofort persistiert; nichts weiter zu tun.
function saveSettingsFromUI() {}

/* =====================================================
   WELCOME-PREVIEW: rotierende Theme-Karte
===================================================== */
var PREVIEW_TIERS = ['Origin','Adventure','Greatness'];
var PREVIEW_TIER_THEMEBOOKS = null;
var previewTierIdx = 0;
var previewLastBook = {Origin:'',Adventure:'',Greatness:''};
var previewTimer = null;

function initPreviewThemebooks() {
  if(PREVIEW_TIER_THEMEBOOKS) return;
  PREVIEW_TIER_THEMEBOOKS = {Origin:[],Adventure:[],Greatness:[]};
  Object.keys(TYPE_TIER).forEach(function(tb){
    var tier = TYPE_TIER[tb];
    if(tier!=='Variable') PREVIEW_TIER_THEMEBOOKS[tier].push(tb);
  });
}

function generatePreviewTheme() {
  var s = loadSettings();
  var enabled = getEnabledThemeTypes(s);
  if (enabled.length === 0) enabled = ['People','Trait','Mastery'];
  // Bevorzugt jede Stufe einmal rotieren — aber nur unter aktivierten Theme Types
  var tier = PREVIEW_TIERS[previewTierIdx % PREVIEW_TIERS.length];
  previewTierIdx++;
  var booksAtTier = enabled.filter(function(tb){ return effectiveLevel(tb, s) === tier; });
  if (booksAtTier.length === 0) booksAtTier = enabled;
  var tb, attempts = 0;
  do { tb = booksAtTier[Math.floor(Math.random()*booksAtTier.length)]; attempts++; }
  while (tb === previewLastBook[tier] && attempts < 5 && booksAtTier.length > 1);
  previewLastBook[tier] = tb;
  return generateTheme(tb, s);
}

function buildWelcomePreviewCard(theme) {
  var dt = theme, mc = levelCssClass(dt.type);
  // EXAKT die Heldenblatt-Theme-Karte (gleiche Klassen/Struktur/Inhalt) \u2014 ohne Edit-Feder.
  return '<div class="hb-theme '+mc+'">'+
    '<div class="hb-band hb-band-head">'+
      '<span class="hb-band-type">'+escapeHtml(displayThemebook(dt.themebook))+'</span>'+
      '<span class="hb-band-might">'+escapeHtml(displayMight(dt.type))+'</span>'+
    '</div>'+
    '<div class="hb-theme-mid">'+
      '<div class="hb-titletag">'+displayTag(dt.titleTag.text)+'</div>'+
      '<div class="hb-powertag">'+displayTag(dt.powerTags[0].text)+'</div>'+
      '<div class="hb-powertag">'+displayTag(dt.powerTags[1].text)+'</div>'+
      (dt.tierTag?'<div class="hb-powertag hb-tiertag">'+displayTag(dt.tierTag.text)+'</div>':'')+
      '<div class="hb-weakness">'+displayTag(dt.weaknessTag.text)+'</div>'+
    '</div>'+
    '<div class="hb-band hb-band-foot">'+
      '<div class="hb-quest-label">'+escapeHtml(STRINGS.result.questLabel)+'</div>'+
      '<div class="hb-quest-title">\u201e'+escapeHtml(dt.quest.title)+'\u201c</div>'+
      '<div class="hb-quest-desc">'+escapeHtml(dt.quest.description)+'</div>'+
    '</div>'+
  '</div>';
}

function showNextPreviewCard() {
  var container = $('welcome-preview');
  if(!container) return;
  var t = generatePreviewTheme();
  var html = buildWelcomePreviewCard(t);
  var old = container.firstElementChild;
  if(!old) {
    container.innerHTML = html;
    return;
  }
  // Crossfade: alte Karte fadet aus, neue fadet ein
  old.style.opacity = '0';
  setTimeout(function(){
    container.innerHTML = html;
    var nc = container.firstElementChild;
    if(!nc) return;
    nc.style.opacity = '0';
    nc.getBoundingClientRect(); // reflow
    nc.style.opacity = '1';
  }, 500);
}

function initWelcomePreview() {
  initPreviewThemebooks();
  showNextPreviewCard();
  if(previewTimer) clearInterval(previewTimer);
  previewTimer = setInterval(function(){
    // Nur rotieren, wenn Welcome aktiv UND der Nutzer oben ist (sonst springt die
    // hohe Karte beim Lesen/Scrollen weg).
    var w = $('screen-welcome');
    var sc = document.querySelector('.welcome-scroll');
    if(w && w.classList.contains('active') && (!sc || sc.scrollTop < 8)) {
      showNextPreviewCard();
    }
  }, 3500);
}

/* EVENT BINDINGS */
initStrings(); initAudio(); initWelcomePreview();
// Startseite -> Zwischenschritt (Modus-Auswahl), erst dann Swipe
$('btn-start').addEventListener('click', function(){ renderIntro(); show(SCREENS.INTRO); });
if($('btn-intro-start')) $('btn-intro-start').addEventListener('click', startSwipe);
if($('btn-intro-back')) $('btn-intro-back').addEventListener('click', function(){ show(SCREENS.WELCOME, true); });
if($('intro-modes')) {
  $('intro-modes').querySelectorAll('.intro-mode').forEach(function(b){
    b.addEventListener('click', function(){ selectIntroMode(b.dataset.preset); });
  });
}
if($('intro-settings-link')) {
  $('intro-settings-link').addEventListener('click', openSettings);
  $('intro-settings-link').addEventListener('keydown', function(e){ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); openSettings(); } });
}
$('btn-yes').addEventListener('click',  function(){programmaticDecide('yes');});
$('btn-no').addEventListener('click',   function(){programmaticDecide('no');});
$('btn-undo').addEventListener('click', undoLast);
$('btn-skip').addEventListener('click',    skipRemainingSwipes);
$('btn-settings').addEventListener('click',      openSettings);
// #37 fix: Animation beim Zurück-Navigieren unterbinden
$('btn-settings-back').addEventListener('click', function(){
  saveSettingsFromUI();
  var ret = state.settingsReturn || SCREENS.WELCOME;
  if(ret === SCREENS.INTRO) renderIntro();
  show(ret, true);
});
// Heldenblatt-Aktionsleiste: Bearbeiten + Speichern (PDF) + Neu beginnen (zurück zur Startseite)
if($('hb-save'))    $('hb-save').addEventListener('click', generatePDF);
if($('hb-restart')) $('hb-restart').addEventListener('click', function(){ setHbEditing(false); document.body.classList.remove('swipe-active'); show(SCREENS.WELCOME, true); });
if($('hb-edit'))    $('hb-edit').addEventListener('click', function(){ setHbEditing(true); });
if($('hb-done'))    $('hb-done').addEventListener('click', function(){ setHbEditing(false); });
$('edit-sheet-overlay').addEventListener('click', function(e){if(e.target===$('edit-sheet-overlay')) closeEditSheet();});
// Settings-Redesign: Preset-Segmente + Schnellaktionen sind statisches Markup → einmalig binden.
// (Toggles & Level-Chips werden bei jedem Render in buildSettingsUI neu gebunden.)
if ($('settings-preset-modes')) {
  $('settings-preset-modes').querySelectorAll('.intro-mode').forEach(function(b){
    b.addEventListener('click', function(){ setPreset(b.dataset.preset); });
  });
}
if ($('settings-tt-quick')) {
  $('settings-tt-quick').querySelectorAll('.tt-quick-btn').forEach(function(b){
    b.addEventListener('click', function(){ applyQuickAction(b.dataset.act); });
  });
}
// Zoom-Verhinderung: Pinch-Zoom auf iOS Safari (ignoriert user-scalable=no seit iOS 10)
document.addEventListener('gesturestart',  function(e){ e.preventDefault(); }, { passive: false });
document.addEventListener('gesturechange', function(e){ e.preventDefault(); }, { passive: false });
document.addEventListener('gestureend',    function(e){ e.preventDefault(); }, { passive: false });
// Fallback fuer iOS-Versionen ohne gesture*-Events: Multi-Touch-touchmove blockieren
document.addEventListener('touchmove', function(e){
  if (e.touches.length > 1) e.preventDefault();
}, { passive: false });

document.addEventListener('keydown', function(e){
  if($('screen-swipe').classList.contains('active')) {
    if(e.key==='ArrowRight'){e.preventDefault();programmaticDecide('yes');}
    else if(e.key==='ArrowLeft'){e.preventDefault();programmaticDecide('no');}
    else if(e.key==='Backspace'){e.preventDefault();undoLast();}
  }
  if($('screen-result').classList.contains('active')) {
    if(e.key==='Escape'){closeEditSheet();}
  }
});
