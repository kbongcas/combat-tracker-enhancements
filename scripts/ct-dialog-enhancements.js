/**
 * Provides functions that manipulate dialog modal. 
 */
class CTDialogEnhancements {
    /**
     * Attempts to hide the names of a combatant in the combat tracker.
     * @param {*} tracker 
     * @param {*} html 
     * @param {*} data 
     */
    static alertUpcomingTurn(player) {
        let d = new Dialog({
            title: "Test Dialog",
            content: "<p>You must choose either Option 1, or Option 2</p>",
            buttons: {
                one: {
                    icon: '<i class="fas fa-check"></i>',
                    label: "Option One",
                    callback: () => console.log("Chose One")
                },
                two: {
                    icon: '<i class="fas fa-times"></i>',
                    label: "Option Two",
                    callback: () => console.log("Chose Two")
                }
            },
            default: "two",
            render: html => console.log("Register interactivity in the rendered dialog"),
            close: html => console.log("This always is logged no matter which option is chosen")
        });
    }
}