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
        let isInitiativeRoll = false;
        try {
            isInitiativeRoll = messageData.data.flags.core.initiativeRoll;
        }
        catch (err) {
            isInitiativeRoll = false;
        }
        if (isInitiativeRoll) {
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
        let isInitiativeRoll = false;
        try {
            isInitiativeRoll = messageData.data.flags.core.initiativeRoll;
        }
        catch (err) {
            isInitiativeRoll = false;
        }
        if (isInitiativeRoll) {
            html.find(".message-sender").text(messageData.data.speaker.alias)
            html.find(".flavor-text").text(messageData.data.flavor)
        }
    }

    /**
     * @TODO
     * - Still a bit buggy, It is wispering it to the GM and the Other owenes and also rendering
     * if not th owner of a actor.
     * @param actor
     */
    static alertUpcomingTurn(actor){
        // ...is not a GM
        console.log("Render 1")
        if (game.user.isGM) return;

        console.log("Render")
        console.log(actor)
        let gm = game.users.filter(user => user.isGM)
        let chatData = {
            user: gm.id,
            content: actor.data.name + " is Next in Combat. Please prepare your turn.",
            whisper: game.users.filter( user => actor.data.permission[`${user.id}`] !== undefined
                && actor.data.permission[`${user.id}`] === 3
                && !actor.data.permission[`${user.id}`].isGM
            )
        };
        console.log(chatData)
        ChatMessage.create(chatData, {});
    }
}

export default CTChatEnhancements