import Constants from "./constants.js"

/**
 * Provide functions that manipulate chat.
 */
class CTChatEnhancements {

    /**
     * If an initiative roll is rolled this will attempt to hide the name of 
     * the actor that rolled it.
     * @param {} messageData 
     */
    static createHiddenNamesInChatInitiative(messageData) {

        // Don't attempt to hide name if...

        // ...is not a GM
        if (game.user.isGM) return;

        // ...actor not valid 
        let actor = game.actors.get(messageData.data.speaker.actor);
        if (!actor) return;

        // ...actor is owned by another player
        if (actor.hasPlayerOwner) return;

        // check if initiative roll
        let isInitiativeRoll = messageData.getFlag("core", "initiativeRoll");
        if (isInitiativeRoll !== undefined && isInitiativeRoll) {
            // change alias
            let originalAlias = messageData.data.speaker.alias;
            messageData.data.speaker.alias = Constants.SETTINGS.UNKNOWN_ALIAS;
            messageData.data.flavor = messageData.data.flavor.replace(originalAlias, messageData.data.speaker.alias);
        }
    }

     /**
     * If an initiative roll is rolled this will attempt to change the sender and flavor text to
     * an unknown alias.
     * @param {} messageData 
     */
    static renderHiddenNamesInChatInitiative(messageData, html) {
        // check if initiative roll
        let isInitiativeRoll = messageData.getFlag("core", "initiativeRoll");
        if (isInitiativeRoll !== undefined && isInitiativeRoll) {

            // change text in html
            html.find(".message-sender").text(messageData.data.speaker.alias)
            html.find(".flavor-text").text(messageData.data.flavor)
        }
    }

    /**
     *  Creates a chat message alerting the player that their turn is up nest in the
     *  turn order.
     * @param {} actor
     */
    static alertUpcomingTurn(actor){
        // dont alert if...

        // ...is gm
        if (game.user.isGM) return;

        // ...does not have owner permissions
        if (!(actor.data.permission[`${game.user.id}`] !== undefined
        && actor.data.permission[`${game.user.id}`] === 3)) return;

        // create message to self
        let chatData = {
            user: game.user.id,
            content: actor.data.name + " is Next in Combat. Please prepare your turn.",
            whisper: game.users.filter(user => user.id === game.user.id)
        };

        // send message
        ChatMessage.create(chatData, {});
    }
}

export default CTChatEnhancements