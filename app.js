/* =====================================================
   Mistheld · App-Logik
===================================================== */

var CFG = Object.freeze({
  STACK_DEPTH: 3, SWIPE_DISTANCE: 80, SWIPE_VELOCITY: 0.3,
  FLY_DURATION_MS: 900, LOADING_DELAY_MS: 700, ALT_LOADING_DELAY_MS: 450,
  MAX_PROPOSALS: 4, MAX_ELEMENT_ALTS: 3, HAPTIC_MS: 6, AUDIO_VOLUME: 0.4,
  MUTED_KEY: 'mistheld:muted', SETTINGS_KEY: 'mistheld:settings', EXPANDED_PREFERENCE: 0.7
});

var DEFAULT_SETTINGS = {
  mightLevels: { Origin: true, Adventure: false, Greatness: false },
  variableMight: {
    Companion:   { enabled: true, level: 'Origin' },
    Magic:       { enabled: true, level: 'Origin' },
    Possessions: { enabled: true, level: 'Origin' }
  }
};

// Zuordnung Theme Type → Might-Tier (für Farben auf Swipe-Karten)
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

function loadSettings() {
  try {
    var raw = localStorage.getItem(CFG.SETTINGS_KEY);
    if (!raw) return JSON.parse(JSON.stringify(DEFAULT_SETTINGS));
    var p = JSON.parse(raw);
    return {
      mightLevels: Object.assign({}, DEFAULT_SETTINGS.mightLevels, p.mightLevels || {}),
      variableMight: {
        Companion:   Object.assign({}, DEFAULT_SETTINGS.variableMight.Companion,   (p.variableMight||{}).Companion   ||{}),
        Magic:       Object.assign({}, DEFAULT_SETTINGS.variableMight.Magic,       (p.variableMight||{}).Magic       ||{}),
        Possessions: Object.assign({}, DEFAULT_SETTINGS.variableMight.Possessions, (p.variableMight||{}).Possessions ||{})
      }
    };
  } catch(_) { return JSON.parse(JSON.stringify(DEFAULT_SETTINGS)); }
}
function saveSettings(s) { try { localStorage.setItem(CFG.SETTINGS_KEY, JSON.stringify(s)); } catch(_){} }

var state = {
  cardIndex:0, shuffledCards:[], swipes:[], affinityScores:{}, hookCounts:{},
  proposals:[], proposalIndex:0, busy:false, edits:{}, hero:null, resultPage:0
};
var RESULT_ANIMATING = false;

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
    out.push({text:tagText(e), expanded:isExpanded(e)});
  }
  return out;
}

function displayMight(l)    { return STRINGS.might[l]     || l; }
function displayThemebook(n){ return STRINGS.themebooks[n] || n; }

function initStrings() {
  document.title = STRINGS.pageTitle;
  document.querySelector('.welcome-mark').textContent            = STRINGS.welcome.mark;
  document.querySelector('.welcome-title').textContent           = STRINGS.welcome.title;
  document.querySelector('.welcome-sub').textContent             = STRINGS.welcome.sub;
  document.querySelector('.welcome-instructions h3').textContent = STRINGS.welcome.howTitle;
  var ul = document.querySelector('.welcome-instructions ul');
  ul.innerHTML='';
  STRINGS.welcome.howItems.forEach(function(t){var li=document.createElement('li');li.textContent=t;ul.appendChild(li);});
  if($('btn-start')) $('btn-start').textContent = STRINGS.welcome.btnStart;
  if($('btn-no'))   $('btn-no').setAttribute('aria-label',   STRINGS.swipe.ariaNo);
  if($('btn-undo')) $('btn-undo').setAttribute('aria-label', STRINGS.swipe.ariaUndo);
  if($('btn-yes'))  $('btn-yes').setAttribute('aria-label',  STRINGS.swipe.ariaYes);
  document.querySelector('#screen-settings h2').textContent = STRINGS.settings.heading;
  if($('btn-settings-back')) $('btn-settings-back').setAttribute('aria-label', STRINGS.settings.ariaBack);
  if($('btn-settings'))      $('btn-settings').setAttribute('aria-label',      STRINGS.settings.ariaOpen);
  if($('settings-might-title')) $('settings-might-title').textContent = STRINGS.settings.mightGroup.title;
  if($('settings-might-sub'))   $('settings-might-sub').textContent   = STRINGS.settings.mightGroup.sub;
  if($('settings-vm-title'))    $('settings-vm-title').textContent    = STRINGS.settings.vmGroup.title;
  if($('settings-vm-sub'))      $('settings-vm-sub').textContent      = STRINGS.settings.vmGroup.sub;
  Object.entries(STRINGS.settings.mightRows).forEach(function(kv){
    var k=kv[0],r=kv[1];
    var le=document.querySelector('[data-might-label="'+k+'"]');
    var he=document.querySelector('[data-might-hint="'+k+'"]');
    if(le) le.textContent=r.label; if(he) he.textContent=r.hint;
  });
  Object.entries(STRINGS.settings.vmLabels).forEach(function(kv){
    var el=document.querySelector('[data-vm-label="'+kv[0]+'"]');
    if(el) el.textContent=kv[1];
  });
  ['select-companion-level','select-magic-level','select-possessions-level'].forEach(function(id){
    var sel=$(id); if(!sel) return;
    var cur=sel.value||'Origin'; sel.innerHTML='';
    Object.entries(STRINGS.might).forEach(function(kv){var o=document.createElement('option');o.value=kv[0];o.textContent=kv[1];sel.appendChild(o);});
    sel.value=cur;
  });
  if($('loading-text')) $('loading-text').textContent = STRINGS.loading.default;
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
  if(sb) sb.style.display=screenId==='screen-welcome'?'':'none';
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
}

/* =====================================================
   SWIPE
===================================================== */
function startSwipe() {
  state.cardIndex=0; state.swipes=[]; state.affinityScores={}; state.hookCounts={};
  state.proposals=[]; state.proposalIndex=0; state.edits={}; state.hero=null; state.resultPage=0; state.busy=false;
  state.shuffledCards = shuffleArray(PHASES[0].cards.slice());
  document.body.classList.add('swipe-active');
  show('screen-swipe');
  renderCard();
}

function renderCard() {
  var stage=$('card-stage');
  stage.querySelectorAll('.card:not(.abandoned)').forEach(function(c){c.remove();});
  if(state.cardIndex>=state.shuffledCards.length) { finishSwiping(); return; }
  $('card-counter').textContent = STRINGS.swipe.cardCounter(state.cardIndex+1, state.shuffledCards.length);
  $('btn-undo').disabled = !canUndo();
  for(var i=CFG.STACK_DEPTH-1;i>=0;i--) {
    var idx=state.cardIndex+i;
    if(idx>=state.shuffledCards.length) continue;
    var card=state.shuffledCards[idx];
    var el=document.createElement('div');
    el.className='card'+(i===0?' front':' behind behind-'+i);
    el.style.zIndex=String(10-i);
    // #42: Theme-Type Tags oben auf der Karte
    var themeTags = '';
    if (i === 0 && card.affinities) {
      var sorted = Object.entries(card.affinities).sort(function(a,b){return b[1]-a[1];}).slice(0,3);
      themeTags = '<div class="card-themes">' + sorted.map(function(kv){
        return '<span class="card-theme-tag '+tierClass(kv[0])+'">'+escapeHtml(displayThemebook(kv[0]))+'</span>';
      }).join('') + '</div>';
    }
    el.innerHTML=
      '<div class="card-decision-overlay yes">'+escapeHtml(STRINGS.swipe.decisionYes)+'</div>'+
      '<div class="card-decision-overlay no">'+escapeHtml(STRINGS.swipe.decisionNo)+'</div>'+
      themeTags+
      '<div class="card-glyph">~</div>'+
      '<div class="card-title">'+escapeHtml(card.title)+'</div>'+
      '<div class="card-divider"></div>'+
      '<div class="card-text">'+escapeHtml(card.text)+'</div>';
    if(i===0) { attachSwipe(el); if(state.cardIndex===0&&!state.swipes.length) el.classList.add('card-hint'); }
    stage.appendChild(el);
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
function generateTheme(name, settings) {
  var tb=THEMEBOOKS[name];
  var titleTag=pickWithExpansionPreference(tb.titleTagSuggestions,1)[0];
  var powerTags=pickWithExpansionPreference(tb.powerTagPool,2);
  var weaknessTag=pickWithExpansionPreference(tb.weaknessTagPool,1)[0];
  var quest=pickQuestWithExp(tb.questPool);
  var type=tb.type;
  if(tb.type==='Variable Might') type=(settings.variableMight[name]||{}).level||'Origin';
  return {type:type,themebook:name,titleTag:titleTag,powerTags:powerTags,weaknessTag:weaknessTag,quest:quest};
}
function generateProposal(mode, base) {
  mode=mode||'initial';
  var s=loadSettings();
  var el=['Origin','Adventure','Greatness'].filter(function(l){return s.mightLevels[l];});
  if(!el.length) el.push('Origin');
  var evm=['Companion','Magic','Possessions'].filter(function(k){return s.variableMight[k].enabled;});
  var std=[0,1,2].map(function(i){return el[i%el.length];});
  var all=evm.length?std.concat(['Variable Might']):std.concat([el[std.length%el.length]]);
  var tbs=all.map(function(st,i){
    var list=st==='Variable Might'?(evm.length?evm:['Companion']):TYPE_TO_THEMEBOOKS[st];
    if(mode==='initial')        return pickBestFrom(list);
    if(mode==='tags-only')      return base.themes[i].themebook;
    if(mode==='new-themebooks') return pickBestFrom(list,[base.themes[i].themebook]);
    return pickRandomFrom(list);
  });
  return {mode:mode,themes:tbs.map(function(tb){return generateTheme(tb,s);})};
}

function finishSwiping() {
  document.body.classList.remove('swipe-active');
  state.busy=true; showLoading(STRINGS.loading.generating);
  setTimeout(function(){
    state.proposals=[generateProposal('initial')]; state.proposalIndex=0; state.edits={};
    state.hero=generateHero(); state.resultPage=0;
    show('screen-result');
    requestAnimationFrame(function(){
      renderCurrentResultPage(); attachResultPageSwipe(); hideLoading(); state.busy=false;
    });
  }, CFG.LOADING_DELAY_MS);
}

/* HELD-GENERATOR */
function generateHero() {
  return {
    firstName:   pickRandomFrom(HERO_FIRSTNAMES),
    epithet:     pickRandomFrom(HERO_EPITHETS),
    title:       pickRandomFrom(HERO_TITLES),
    description: pickRandomFrom(HERO_DESCRIPTIONS)
  };
}
function rerollHeroPart(part) {
  var pools={firstName:HERO_FIRSTNAMES,epithet:HERO_EPITHETS,title:HERO_TITLES,description:HERO_DESCRIPTIONS};
  var v, a=0;
  do { v=pickRandomFrom(pools[part]); a++; } while(v===state.hero[part]&&a<5);
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
    quest:      getCurrentVal(ti,'quest',   tb.quest)
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
function handleReroll(ti,k) {
  var dt=getDisplayTheme(ti), tb=THEMEBOOKS[dt.themebook], s=loadSettings();
  var v;
  if      (k==='theme')            { v=generateTheme(dt.themebook,s); clearThemeEdits(ti); }
  else if (k==='title')            { v=pickWithExpansionPreference(tb.titleTagSuggestions,1)[0]; }
  else if (k==='pow0'||k==='pow1') { v=pickWithExpansionPreference(tb.powerTagPool,1)[0]; }
  else if (k==='weakness')         { v=pickWithExpansionPreference(tb.weaknessTagPool,1)[0]; }
  else if (k==='quest')            { v=pickQuestWithExp(tb.questPool); }
  if(v!==undefined) addAlt(ti,k,v);
}
function handleNavigate(ti,k,dir) {
  var e=getEdit(ti,k); if(!e) return;
  e.index=Math.max(0,Math.min(e.alts.length,e.index+dir));
}

/* =====================================================
   ERGEBNIS-SCREEN (#38: Carousel-Animation)
===================================================== */
function totalResultPages() {
  if(!state.proposals.length) return 1;
  return 1 + state.proposals[state.proposalIndex].themes.length + 1;
}

// Baut Karten-Element ohne es einzufügen
function buildPageCard() {
  var p=state.resultPage, n=state.proposals[state.proposalIndex].themes.length;
  if(p===0)    return buildHeroCard();
  else if(p<=n) return buildThemeCard(p-1);
  else          return buildSaveCard();
}

// Navigation mit Slide-Animation (#38)
function navigateResult(dir) {
  if (RESULT_ANIMATING) return;
  var np = state.resultPage + dir;
  if (np < 0 || np >= totalResultPages()) return;
  state.resultPage = np;
  var stage = $('result-stage');
  var oldCard = stage.querySelector('.result-card');
  var newCard = buildPageCard();
  updateResultNav();
  if (oldCard) {
    RESULT_ANIMATING = true;
    newCard.style.transform = dir > 0 ? 'translateX(100%)' : 'translateX(-100%)';
    newCard.style.transition = 'none';
    oldCard.style.transition = 'none';
    stage.appendChild(newCard);
    newCard.getBoundingClientRect(); // reflow
    var easing = 'transform 0.28s cubic-bezier(0.25,0.46,0.45,0.94)';
    newCard.style.transition = easing;
    oldCard.style.transition = easing;
    newCard.style.transform = 'translateX(0)';
    oldCard.style.transform = dir > 0 ? 'translateX(-100%)' : 'translateX(100%)';
    var toRemove = oldCard;
    toRemove.addEventListener('transitionend', function() {
      if (toRemove.parentNode) toRemove.parentNode.removeChild(toRemove);
      RESULT_ANIMATING = false;
    }, {once: true});
  } else {
    stage.innerHTML = '';
    stage.appendChild(newCard);
  }
}

// Direkte Darstellung ohne Animation (für Dots, Init)
function renderCurrentResultPage() {
  var stage = $('result-stage');
  stage.innerHTML = '';
  stage.appendChild(buildPageCard());
  updateResultNav();
}

function updateResultNav() {
  var total=totalResultPages(), cur=state.resultPage;
  var dotsEl=$('result-dots'); dotsEl.innerHTML='';
  for(var i=0;i<total;i++) {
    var d=document.createElement('button');
    d.type='button'; d.className='result-dot'+(i===cur?' active':'');
    (function(idx){d.addEventListener('click',function(){
      if (!RESULT_ANIMATING) { state.resultPage=idx; renderCurrentResultPage(); }
    });})(i);
    dotsEl.appendChild(d);
  }
}

function attachResultPageSwipe() {
  var stage=$('result-stage');
  var sx=0,sy=0,tracking=false;
  stage.addEventListener('pointerdown',function(e){sx=e.clientX;sy=e.clientY;tracking=true;},{passive:true});
  stage.addEventListener('pointerup',function(e){
    if(!tracking) return; tracking=false;
    if($('edit-sheet-overlay').classList.contains('active')) return;
    var dx=e.clientX-sx,dy=e.clientY-sy;
    if(Math.abs(dx)>55&&Math.abs(dx)>Math.abs(dy)*1.5) navigateResult(dx<0?1:-1);
  },{passive:true});
  stage.addEventListener('pointercancel',function(){tracking=false;},{passive:true});
}

/* =====================================================
   #39: Feder-Icon statt Stift
===================================================== */
var FEATHER_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><line x1="16" y1="8" x2="2" y2="22"/><line x1="17.5" y1="15" x2="9" y2="15"/></svg>';

/* =====================================================
   SEITE 0: HELD-KARTE
===================================================== */
function buildHeroCard() {
  var h=state.hero;
  var card=document.createElement('div');
  card.className='result-card rc-hero';
  card.innerHTML=
    '<button class="rc-edit-btn" id="rc-hero-edit" type="button">'+FEATHER_SVG+'</button>'+
    '<div class="rc-hero-eyebrow">'+escapeHtml(STRINGS.hero.eyebrow)+'</div>'+
    '<div class="rc-section">'+
      '<div class="rc-label">'+escapeHtml(STRINGS.hero.labelName)+'</div>'+
      '<div class="rc-hero-name">'+escapeHtml(h.firstName)+' '+escapeHtml(h.epithet)+'</div>'+
    '</div>'+
    '<div class="rc-divider"></div>'+
    '<div class="rc-section">'+
      '<div class="rc-label">'+escapeHtml(STRINGS.hero.labelTitle)+'</div>'+
      '<div class="rc-hero-title">'+escapeHtml(h.title)+'</div>'+
    '</div>'+
    '<div class="rc-divider"></div>'+
    '<div class="rc-section">'+
      '<div class="rc-label">'+escapeHtml(STRINGS.hero.labelDescription)+'</div>'+
      '<div class="rc-hero-description">'+escapeHtml(h.description)+'</div>'+
    '</div>';
  card.querySelector('#rc-hero-edit').addEventListener('click', openHeroEditSheet);
  return card;
}

/* =====================================================
   SEITEN 1-n: THEME-KARTE (#40: zentriert, Struktur)
===================================================== */
function buildThemeCard(ti) {
  var dt=getDisplayTheme(ti);
  var mc=dt.type==='Origin'?'tc-origin':dt.type==='Adventure'?'tc-adventure':'tc-greatness';
  var card=document.createElement('div');
  card.className='result-card rc-theme '+mc;
  // #40: Themebook-Name oben, kein "Theme-Typ"-Label
  // Power Tags Block: Titelschlagwort + 2 Power Tags zusammen
  // "Weakness Tag" statt "Schwäche"
  card.innerHTML=
    '<button class="rc-edit-btn" id="rtp-edit-btn" type="button">'+FEATHER_SVG+'</button>'+
    '<div class="rc-theme-header">'+
      '<div class="rc-theme-name">'+escapeHtml(displayThemebook(dt.themebook))+'</div>'+
      '<span class="rc-might-badge">'+escapeHtml(displayMight(dt.type))+'</span>'+
    '</div>'+
    '<div class="rc-divider"></div>'+
    '<div class="rc-theme-section">'+
      '<div class="rc-label">Power Tags</div>'+
      '<div class="rc-title-tag">'+displayTag(dt.titleTag.text)+'</div>'+
      '<div class="rc-power-tag">'+displayTag(dt.powerTags[0].text)+'</div>'+
      '<div class="rc-power-tag">'+displayTag(dt.powerTags[1].text)+'</div>'+
    '</div>'+
    '<div class="rc-theme-section">'+
      '<div class="rc-label">Weakness Tag</div>'+
      '<div class="rc-weakness-tag">'+displayTag(dt.weaknessTag.text)+'</div>'+
    '</div>'+
    '<div class="rc-theme-section">'+
      '<div class="rc-label">'+escapeHtml(STRINGS.result.questLabel)+'</div>'+
      '<div class="rc-quest-title">„'+escapeHtml(dt.quest.title)+'“</div>'+
      '<div class="rc-quest-desc">'+escapeHtml(dt.quest.description)+'</div>'+
    '</div>';
  card.querySelector('#rtp-edit-btn').addEventListener('click', function(){ openEditSheet(ti); });
  return card;
}

/* =====================================================
   LETZTE SEITE: ÜBERSICHT (#41)
===================================================== */
function buildSaveCard() {
  var h=state.hero, prop=state.proposals[state.proposalIndex];
  // #41: 4 kompakte Theme-Kacheln
  var tiles = prop.themes.map(function(_,ti){
    var dt=getDisplayTheme(ti);
    var mc=dt.type==='Origin'?'tc-origin':dt.type==='Adventure'?'tc-adventure':'tc-greatness';
    return '<div class="ot-tile '+mc+'">'+
      '<div class="ot-type">'+escapeHtml(displayThemebook(dt.themebook))+'</div>'+
      '<div class="ot-tags">'+
        '<span class="ot-power">'+displayTag(dt.titleTag.text)+'</span>'+
        '<span class="ot-power">'+displayTag(dt.powerTags[0].text)+'</span>'+
        '<span class="ot-power">'+displayTag(dt.powerTags[1].text)+'</span>'+
        '<span class="ot-weakness">'+displayTag(dt.weaknessTag.text)+'</span>'+
      '</div>'+
      '<div class="ot-quest">„'+escapeHtml(dt.quest.title)+'“</div>'+
    '</div>';
  }).join('');
  var card=document.createElement('div');
  card.className='result-card rc-save';
  card.innerHTML=
    '<div class="save-overview-title">Übersicht</div>'+
    '<div class="save-hero-name">'+escapeHtml(h.firstName)+' '+escapeHtml(h.epithet)+'</div>'+
    '<div class="save-hero-title">'+escapeHtml(h.title)+'</div>'+
    '<div class="overview-tiles">'+tiles+'</div>'+
    '<div class="save-actions">'+
      '<button class="save-btn-primary" id="save-pdf">'+escapeHtml(STRINGS.result.btnAccept)+'</button>'+
      '<button class="save-btn-ghost" id="save-restart">'+escapeHtml(STRINGS.result.btnRestart)+'</button>'+
    '</div>';
  card.querySelector('#save-pdf').addEventListener('click', generatePDF);
  card.querySelector('#save-restart').addEventListener('click', function(){ document.body.classList.remove('swipe-active'); show('screen-welcome', true); });
  return card;
}

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
      var stage=$('result-stage'); stage.innerHTML=''; stage.appendChild(buildHeroCard());
      updateResultNav();
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
        '<span class="es-nav-pos">'+(idx+1)+' / '+total+'</span>'+
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
    row('title',    STRINGS.hero.labelTitleTag,  dt.titleTag)+
    row('pow0',     STRINGS.hero.labelPower1,     dt.powerTags[0])+
    row('pow1',     STRINGS.hero.labelPower2,     dt.powerTags[1])+
    row('weakness', STRINGS.hero.labelWeakness,   dt.weaknessTag)+
    row('quest',    STRINGS.hero.labelQuest,      dt.quest)+
    '<div class="es-footer"><button type="button" class="es-full-reroll" id="es-full-reroll" data-ti="'+ti+'">'+escapeHtml(STRINGS.hero.fullReroll)+'</button></div>';
  body.querySelectorAll('.es-reroll-btn').forEach(function(btn){
    btn.addEventListener('click',function(){
      handleReroll(parseInt(btn.dataset.ti),btn.dataset.k);
      openEditSheet(ti);
      var stage=$('result-stage'); stage.innerHTML=''; stage.appendChild(buildThemeCard(ti));
      updateResultNav();
    });
  });
  body.querySelectorAll('.es-nav-btn').forEach(function(btn){
    btn.addEventListener('click',function(){
      handleNavigate(parseInt(btn.dataset.ti),btn.dataset.k,parseInt(btn.dataset.dir));
      openEditSheet(ti);
      var stage=$('result-stage'); stage.innerHTML=''; stage.appendChild(buildThemeCard(ti));
      updateResultNav();
    });
  });
  var fr=$('es-full-reroll');
  fr.addEventListener('click',function(){
    handleReroll(parseInt(fr.dataset.ti),'theme');
    openEditSheet(ti);
    var stage=$('result-stage'); stage.innerHTML=''; stage.appendChild(buildThemeCard(ti));
    updateResultNav();
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
  theme.powerTags.forEach(function(t){var ls=doc.splitTextToSize('\u25e6 '+pdfTagText(t),cW-8);doc.text(ls,x+4,cy);cy+=ls.length*4.5;});
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

/* SETTINGS */
function openSettings() {
  var s=loadSettings();
  $('toggle-origin').checked      =s.mightLevels.Origin;
  $('toggle-adventure').checked   =s.mightLevels.Adventure;
  $('toggle-greatness').checked   =s.mightLevels.Greatness;
  $('toggle-companion').checked   =s.variableMight.Companion.enabled;
  $('toggle-magic').checked       =s.variableMight.Magic.enabled;
  $('toggle-possessions').checked =s.variableMight.Possessions.enabled;
  $('select-companion-level').value   =s.variableMight.Companion.level;
  $('select-magic-level').value       =s.variableMight.Magic.level;
  $('select-possessions-level').value =s.variableMight.Possessions.level;
  updateSettingsUI(); show('screen-settings');
}
function updateSettingsUI() {
  var cbs=[$('toggle-origin'),$('toggle-adventure'),$('toggle-greatness')];
  var cc=cbs.filter(function(c){return c.checked;}).length;
  cbs.forEach(function(c){c.disabled=(cc===1&&c.checked);});
  [['toggle-companion','select-companion-level'],['toggle-magic','select-magic-level'],['toggle-possessions','select-possessions-level']].forEach(function(p){
    var en=$(p[0]).checked; $(p[1]).disabled=!en; $(p[1]).style.opacity=en?'1':'0.4';
  });
}
function saveSettingsFromUI() {
  saveSettings({
    mightLevels:{Origin:$('toggle-origin').checked,Adventure:$('toggle-adventure').checked,Greatness:$('toggle-greatness').checked},
    variableMight:{
      Companion:  {enabled:$('toggle-companion').checked,  level:$('select-companion-level').value},
      Magic:      {enabled:$('toggle-magic').checked,      level:$('select-magic-level').value},
      Possessions:{enabled:$('toggle-possessions').checked,level:$('select-possessions-level').value}
    }
  });
}

/* EVENT BINDINGS */
initStrings(); initAudio();
$('btn-start').addEventListener('click', startSwipe);
$('btn-yes').addEventListener('click',  function(){programmaticDecide('yes');});
$('btn-no').addEventListener('click',   function(){programmaticDecide('no');});
$('btn-undo').addEventListener('click', undoLast);
$('btn-settings').addEventListener('click',      openSettings);
// #37 fix: Animation beim Zurück-Navigieren unterbinden
$('btn-settings-back').addEventListener('click', function(){saveSettingsFromUI();show('screen-welcome',true);});
$('edit-sheet-overlay').addEventListener('click', function(e){if(e.target===$('edit-sheet-overlay')) closeEditSheet();});
['toggle-origin','toggle-adventure','toggle-greatness','toggle-companion','toggle-magic','toggle-possessions'].forEach(function(id){
  $(id).addEventListener('change',updateSettingsUI);
});
document.addEventListener('keydown', function(e){
  if($('screen-swipe').classList.contains('active')) {
    if(e.key==='ArrowRight'){e.preventDefault();programmaticDecide('yes');}
    else if(e.key==='ArrowLeft'){e.preventDefault();programmaticDecide('no');}
    else if(e.key==='Backspace'){e.preventDefault();undoLast();}
  }
  if($('screen-result').classList.contains('active')) {
    if(e.key==='ArrowRight'){e.preventDefault();navigateResult(1);}
    else if(e.key==='ArrowLeft'){e.preventDefault();navigateResult(-1);}
    else if(e.key==='Escape'){closeEditSheet();}
  }
});
