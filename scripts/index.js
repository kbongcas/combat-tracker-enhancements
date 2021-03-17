import { CTESettings } from "./settings.js"

class CombatTrackerEnhancements {

    static renderCombatTracker(tracker, html, data) {
        if (game.settings.get("combatTrackerEnhancements", "hideNamesSettings")) {
            CombatTrackerEnhancements.hideNameInTracker(tracker, html, data);
        }
    }

    static hideNameInTracker(tracker, html, data) {
        if (game.user.isGM) return;
        data.combat.data.combatants.forEach(combatant => {
            if (!combatant.actor.hasPlayerOwner) {
                // hide the name
                html.find(`#combat-tracker [data-combatant-id=${combatant._id}] div.token-name h4`).css('opacity', '0.0');
            }
        });
    }

    static createHiddenNamesInChatInitiative(messageData) {

        if (game.user.isGM) return;

        let actor = game.actors.get(messageData.data.speaker.actor);
        if(!actor)  return;
        if(actor.hasPlayerOwner) return;

        let isInitiativeRoll = false;
        try{
            isInitiativeRoll = messageData.data.flags.core.initiativeRoll;
        }
        catch(err){
            initiativeRoll = false;
        }
        if(isInitiativeRoll){
            let originalAlias = messageData.data.speaker.alias;
            messageData.data.speaker.alias = "Unknown";
            messageData.data.flavor = messageData.data.flavor.replace(originalAlias, messageData.data.speaker.alias);
        }
    }

    static renderHiddenNamesInChatInitiative(messageData, html) {
        let isInitiativeRoll = false;
        try {
            isInitiativeRoll = messageData.data.flags.core.initiativeRoll;
        }
        catch (err) {
            isInitiativeRoll = false;
            console.log("NOT INITIATIVE")
        }
        if (isInitiativeRoll) {
            console.log("HAS INITIATIVE")
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

Hooks.on('renderCombatTracker', CombatTrackerEnhancements.renderCombatTracker)
Hooks.once('init', () => {
    CTESettings.init();
})
Hooks.on("updateCombat", CombatTrackerEnhancements.notifyNextPlayer)
Hooks.on("createChatMessage", CombatTrackerEnhancements.createHiddenNamesInChatInitiative)
Hooks.on("renderChatMessage", CombatTrackerEnhancements.renderHiddenNamesInChatInitiative)