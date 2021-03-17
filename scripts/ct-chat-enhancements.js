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
            initiativeRoll = false;
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


    static notifyNextPlayer(combat, delta) {
        //console.log("COMBAT UPDATED: ")
        //console.log(combat)
        //console.log(delta)
        //if(delta.turn === combat.length) {
        //    if(combat.turns.players > 0){
        //        combat.turn.players.forEach( user => { 
        //            user.
        //        })
        //    }
        //}
        //let d = new Dialog({
        //    title: "Test Dialog",
        //    content: "<p>You must choose either Option 1, or Option 2</p>",
        //    buttons: {
        //        one: {
        //            icon: '<i class="fas fa-check"></i>',
        //            label: "Option One",
        //            callback: () => console.log("Chose One")
        //        },
        //        two: {
        //            icon: '<i class="fas fa-times"></i>',
        //            label: "Option Two",
        //            callback: () => console.log("Chose Two")
        //        }
        //    },
        //    default: "two",
        //    render: html => console.log("Register interactivity in the rendered dialog"),
        //    close: html => console.log("This always is logged no matter which option is chosen")
        //});
        //d.render(true);

        let c = new ChatMessage();
    }
}

export default CTChatEnhancements