class Settings {

    init() {
        game.settings.register("combatTrackerEnhancements", "hideNamesSettings", {
            name: "Hide tracker names",
            hint: "Hide the names of actors not owned by players from the players.",
            scope: "world",
            config: true,
            type: Boolean,
            default: true
        });

        game.settings.register("combatTrackerEnhancements", "upNextSettings2", {
            name: "Up next Message",
            hint: "The private message that the player will receive when up next in the turn order.",
            scope: "world",
            config: true,
            type: String,
            default: true,
        });

        game.settings.register("combatTrackerEnhancements", "upNextSettings", {
            name: "Up next",
            hint: "Private message the player that is next in the turn order.",
            scope: "world",
            config: true,
            type: Boolean,
            default: true,
            onChange: value => game.settings.set("combatTrackerEnhancements", "upNextSettings2", value)
        });

    }

}
// Assign a new setting value

export const CTESettings = new Settings();
