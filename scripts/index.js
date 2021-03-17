import { CTSettings } from "./settings.js"
import CTChatEnhancements from "./ct-chat-enhancements.js"
import CTTrackerEnhancements from "./ct-tracker-enhancements.js"
import Constants from "./constants.js"

// hook up 
Hooks.once("init",  CombatTrackerEnhancementsHooks._init)
Hooks.on("renderCombatTracker", CombatTrackerEnhancementsHooks._renderCombatTracker)
Hooks.on("createChatMessage", CombatTrackerEnhancementsHooks._createChatMessage)
Hooks.on("renderChatMessage", CombatTrackerEnhancementsHooks._renderChatMessage)
//Hooks.on("updateCombat", )

class CombatTrackerEnhancementsHooks {

    // life cycle hooks
    static _init() {
        CTSettings.init();
    }

    // Tracker Hooks
    static _renderCombatTracker(tracker, html, data) {
        if (game.settings.get(Constants.MODULE.NAME,Constants.SETTINGS.HIDE_NAME_TRACKER)) {
            CTTrackerEnhancements.hideNameInTracker(tracker, html, data);
        }
    }

    // Combat Hooks
    static _updateCombat(combat, delta) {
        // notify next player
    }

    // Chat Hooks
    static _createChatMessage(messageData) {
        CTChatEnhancements.createHiddenNamesInChatInitiative(messageData)
    }

    static _renderChatMessage(messageData, html) {
        CTChatEnhancements.renderHiddenNamesInChatInitiative(messageData, html)
    }

}
