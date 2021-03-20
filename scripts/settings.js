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

        game.settings.register(Constants.MODULE.NAME, Constants.SETTINGS.ALERT_NEXT_IN_COMBAT, {
            name: "Up next",
            hint: "Private message the player that is next in the turn order.",
            scope: "world",
            config: false,
            type: Boolean,
            default: false,
        });
    }

}

export const CTSettings = new Settings();
