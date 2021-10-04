import { Game } from '../games';
import { GameDataOptions } from './types';

/**
 * This class contains all game specific data
 * @author Eirik Måseidvåg
 */
export default class GameData {
    /**
     * Pretty name of the game
     * Example: World of Warships
     * NOT like this: wows
     * @private
     */
    private readonly _name: string

    /**
     * An URL to a cover that will be used as a default cover of a room
     * Should be a transparent background with the game logo centered both horizontally and vertically
     * Image should preferably be 16:9 ratio
     * @private
     */
    private readonly _cover: string

    /**
     * The game the data is related to
     * @private
     */
    private readonly _game: Game

    /**
     * Construct the instance
     * @param options
     */
    public constructor(options: GameDataOptions) {
        this._name = options.name;
        this._cover = options.cover;
        this._game = options.game;
    }

    /**
     * Returns the name
     * @returns {string} name: the pretty name for the GameAssets
     */
    public get name (): string {
        return this._name;
    }

    /**
     * Returns the cover URL
     * @returns {string} cover: URL to cover
     */
    get cover (): string {
        return this._cover;
    }

    /**
     * Returns the game the GameAssets is related to
     * @returns {Game} game: the game
     */
    get game (): Game {
        return this._game;
    }
}
