/* =====================================================
   Fluechtiger Sitzungs-State (Swipe-/Vorschlags-/Edit-Scratchpad + aktueller Held).
   Der FERTIGE Held wird separat als Character persistiert (siehe state/persistence).
===================================================== */
import { SCREENS } from '../core/constants';

export const state: any = {
  cardIndex: 0, shuffledCards: [], swipes: [], affinityScores: {}, hookCounts: {},
  proposals: [], proposalIndex: 0, busy: false, edits: {}, hero: null,
  currentCharacterId: null, // id des persistierten Charakters der aktuellen Sitzung
  settingsReturn: SCREENS.WELCOME,
};
