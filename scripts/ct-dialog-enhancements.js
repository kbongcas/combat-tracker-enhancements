/**
 * Provides functions that manipulate dialog modal. 
 */
class CTDialogEnhancements {

    /**
     * Attempts to hide the names of a combatant in the combat tracker.
     * @param actor
     */
    static alertUpcomingTurn(actor) {
        // dont alert if...

        // ...is gm
        if (game.user.isGM) return;

        // ...does not have owner permissions
        if (!(actor.data.permission[`${game.user.id}`] !== undefined
            && actor.data.permission[`${game.user.id}`] === 3)) return;

        // create dialog box
        let d = new Dialog({
            title: "Turn Alert",
            content: actor.data.name + " is Next in Combat. Please prepare your turn.",
            buttons: {
                okay: {
                    label: "Okay",
                },
            },
            default: "okay"
        });
        d.render(true)
    }
}

export default CTDialogEnhancements;