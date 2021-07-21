import { Game } from '../games';
import Asset from '../canvas/elements/icon/Asset';
import Map from '../canvas/map/Map';
import { ApiOptions } from './types';

/**
 * This class contains all game specific data
 * @author Eirik Måseidvåg
 */
export default class Api {
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
     * All the game entities and icons converted into assets
     * @private
     */
    private readonly _assets: Array<Asset>

    /**
     * All the game maps with their grids and views
     * @private
     */
    private readonly _maps: Array<Map>

    /**
     * Construct the instance
     * @param options
     */
    public constructor(options: ApiOptions) {
        this._name = options.name;
        this._cover = options.cover;
        this._game = options.game;
        this._assets = options.assets;
        this._maps = options.maps;
    }

    /**
     * Returns the name
     * @returns {string} name: the pretty name for the Api
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
     * Returns the game the Api is related to
     * @returns {Game} game: the game
     */
    get game (): Game {
        return this._game;
    }

    /**
     * Returns all assets
     * @returns {Array<Asset>} assets: the assets
     */
    get assets(): Array<Asset> {
        return this._assets;
    }

    /**
     * Returns all maps
     * @returns {Array<Map>} maps: the assets
     */
    get maps(): Array<Map> {
        return this._maps;
    }
}
