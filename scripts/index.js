import { CTSettings } from "./settings.js"
import CTDialogEnhancements from "./ct-dialog-enhancements.js"
import CTChatEnhancements from "./ct-chat-enhancements.js"
import CTTrackerEnhancements from "./ct-tracker-enhancements.js"
import Constants from "./constants.js"

class CombatTrackerEnhancementsHooks {

    // life cycle hooks
    static _init() {
        CTSettings.init();
    }

    // Tracker Hooks
    static _renderCombatTracker(tracker, html, data) {
        if (game.settings.get(Constants.MODULE.NAME, Constants.SETTINGS.HIDE_NAME_TRACKER)) {
            CTTrackerEnhancements.hideNameInTracker(tracker, html, data);
        }
    }

    // Chat Hooks
    static _createChatMessage(messageData) {
        CTChatEnhancements.createHiddenNamesInChatInitiative(messageData)
    }

    static _renderChatMessage(messageData, html) {
        CTChatEnhancements.renderHiddenNamesInChatInitiative(messageData, html)
    }

    //@TODO - Add alerts to game settings
    static _updateCombat(combat, delta) {
        // find next person in combat
        let nextInCombat = delta.turn === combat.turns.length-1 ? combat.turns[0].actor : combat.turns[delta.turn+1].actor;
        CTChatEnhancements.alertUpcomingTurn(nextInCombat)
        CTDialogEnhancements.alertUpcomingTurn(nextInCombat)
    }

}

// hook up
Hooks.once("init",  CombatTrackerEnhancementsHooks._init)
Hooks.on("renderCombatTracker", CombatTrackerEnhancementsHooks._renderCombatTracker)
Hooks.on("createChatMessage", CombatTrackerEnhancementsHooks._createChatMessage)
Hooks.on("renderChatMessage", CombatTrackerEnhancementsHooks._renderChatMessage)
Hooks.on("updateCombat", CombatTrackerEnhancementsHooks._updateCombat)