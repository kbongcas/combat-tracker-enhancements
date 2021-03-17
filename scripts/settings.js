import Constants from "./constants.js"

/**
 * Handles settings for ct enhancements. 
 */
class Settings {

    /**
     * Initializes the settings.
     */
    init() {
        game.settings.register(Constants.MODULE.NAME, Constants.SETTINGS.HIDE_NAME_TRACKER, {
            name: "Hide tracker names",
            hint: "Hide the names of non owned actors on the tracker.",
            scope: "world",
            config: true,
            type: Boolean,
            default: true
        });

        game.settings.register(Constants.MODULE.NAME, Constants.SETTINGS.HIDE_NAME_INITIATIVE_ROLL, {
            name: "Hide initiative roll names",
            hint: "Hide the names of non owned actors on the chat when rolling initiative.",
            scope: "world",
            config: true,
            type: Boolean,
            default: true
        });

        game.settings.register(Constants.MODULE.NAME, "upNextSettings2", {
            name: "Up next Message",
            hint: "The private message that the player will receive when up next in the turn order.",
            scope: "world",
            config: true,
            type: String,
            default: true,
        });

        game.settings.register(Constants.MODULE.NAME, "upNextSettings", {
            name: "Up next",
            hint: "Private message the player that is next in the turn order.",
            scope: "world",
            config: true,
            type: Boolean,
            default: true,
        });
    }

}

export const CTSettings = new Settings();
