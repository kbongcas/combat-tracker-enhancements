import CTChatEnhancements from "./ct-chat-enhancements.js"
/**
 * Provide functions that manipulate the combat tracker.
 */
class CTTrackerEnhancements {
    /**
     * Attempts to hide the names of a combatant in the combat tracker.
     * @param {*} tracker 
     * @param {*} html 
     * @param {*} data 
     */
    static hideNameInTracker(tracker, html, data) {
        // don't hide names if GM
        if (game.user.isGM) return;

        data.combat.data.combatants.forEach(combatant => {
            if (!combatant.actor.hasPlayerOwner) {
                // hide the name
                html.find(`#combat-tracker [data-combatant-id=${combatant._id}] div.token-name h4`).css('opacity', '0.0');
            }
        });
    }

    static notifyNextTurn(player){
        CTChatEnhancements.notifyNextTurn(playerData)
    }
}

export default CTTrackerEnhancements