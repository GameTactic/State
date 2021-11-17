import { StaticGameOptions } from './types';
import { Game } from '../misc/games';

/**
 * This class contains all game specific data
 * @author Eirik Måseidvåg
 */
export default class StaticGame {
    /**
     * Pretty name of the game
     * Example: World of Warships
     * NOT like this: wows
     * @private
     */
    private readonly _name: string

    /**
     * Acronym name of the game
     * Example: World of Warships => WOWS
     * @private
     */
    private readonly _acronym: string

    /**
     * An URL to a cover that will be used as a default cover of a room
     * Should be a transparent background with the game logo centered both horizontally and vertically
     * image should preferably be 16:9 ratio
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
    public constructor(options: StaticGameOptions) {
        this._name = options.name;
        this._acronym = options.acronym;
        this._cover = options.cover;
        this._game = options.game;
    }

    /**
     * Returns the name
     * @returns {string} name: the pretty name for the game
     */
    public get name (): string {
        return this._name;
    }


    /**
     * Returns the acronym
     * @returns {string} acronym: the acronym name for the game
     */
    public get acronym (): string {
        return this._acronym;
    }

    /**
     * Returns the cover URL
     * @returns {string} cover: URL to cover
     */
    get cover (): string {
        return this._cover;
    }

    /**
     * Returns the game the StaticGameExtended is related to
     * @returns {Game} game: the game
     */
    get game (): Game {
        return this._game;
    }
}
