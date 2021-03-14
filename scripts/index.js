class CombatTrackerEnhancements {

    static renderCombatTracker(tracker, html, data) {
        CombatTrackerEnhancements.hideNameInTracker(tracker, html, data);
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
}

Hooks.on('renderCombatTracker', CombatTrackerEnhancements.renderCombatTracker)