import { CTSettings } from "./settings.js"
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

    // Combat Hooks
    /**
     * @TODO - FIX THIS
     * @param combat
     * @param delta
     * @private
     */
    /// @TODO - Fix this
    static _updateCombat(combat, delta) {
        //console.log("Combat: ", combat)
        //console.log("Delta: ", delta)
        //console.log("0: ", combat)

        //let nextInCombat = delta.turn === combat.turns.length-1 ? combat.turns[0].actor : combat.turns[delta.turn+1].actor;
        //console.log(game.user.id)
        //console.log(game.user.id)
        //if(nextInCombat.data.permission[game.user.id] !== undefined || nextInCombat.permission[game.user.id] === ENTITY_PERMISSIONS.OWNER){
        //    CTChatEnhancements.alertUpcomingTurn(nextInCombat)
        //}
    }

    // Chat Hooks
    static _createChatMessage(messageData) {
        CTChatEnhancements.createHiddenNamesInChatInitiative(messageData)
    }

    static _renderChatMessage(messageData, html) {
        CTChatEnhancements.renderHiddenNamesInChatInitiative(messageData, html)
    }

}

// hook up
Hooks.once("init",  CombatTrackerEnhancementsHooks._init)
Hooks.on("renderCombatTracker", CombatTrackerEnhancementsHooks._renderCombatTracker)
Hooks.on("createChatMessage", CombatTrackerEnhancementsHooks._createChatMessage)
Hooks.on("renderChatMessage", CombatTrackerEnhancementsHooks._renderChatMessage)
Hooks.on("updateCombat", CombatTrackerEnhancementsHooks._updateCombat)