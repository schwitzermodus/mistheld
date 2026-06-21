/* =====================================================
   Hintergrund-Audio + Stummschaltung (DOM + localStorage).
===================================================== */
import { $ } from '../util/dom';
import { CFG } from '../core/constants';
import { STRINGS } from '../i18n/strings.js';

let audio: any = null, muteBtn: any = null;

export function isMuted(): boolean { try { return localStorage.getItem(CFG.MUTED_KEY) === '1'; } catch (_) { return false; } }
function setMutedPersisted(m: boolean): void { try { localStorage.setItem(CFG.MUTED_KEY, m ? '1' : '0'); } catch (_) {} }
function updateMuteUI(): void { muteBtn.classList.toggle('muted', audio.muted); muteBtn.setAttribute('aria-label', audio.muted ? STRINGS.audio.ariaOff : STRINGS.audio.ariaOn); }
function tryPlay(): void { var p = audio.play(); if (p && typeof p.catch === 'function') p.catch(function () {}); }

export function initAudio(): void {
  audio = $('bg-audio'); muteBtn = $('btn-mute');
  if (!audio || !muteBtn) return;
  audio.volume = CFG.AUDIO_VOLUME; audio.muted = isMuted(); updateMuteUI(); tryPlay();
  var k = function () { tryPlay(); };
  document.addEventListener('pointerdown', k, { once: true });
  document.addEventListener('touchstart', k, { once: true, passive: true });
  document.addEventListener('keydown', k, { once: true });
  document.addEventListener('click', k, { once: true });
  document.addEventListener('visibilitychange', function () { if (!document.hidden && !audio.muted && audio.paused) tryPlay(); });
  muteBtn.addEventListener('click', function (e: any) {
    e.stopPropagation(); audio.muted = !audio.muted; setMutedPersisted(audio.muted); updateMuteUI();
    if (!audio.muted && audio.paused) tryPlay();
  });
}
