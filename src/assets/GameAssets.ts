import Asset from '../canvas/elements/icon/Asset';
import Map from '../canvas/map/Map';
import { GameAssetsOptions } from './types';
import GameData from './GameData';

/**
 * This class contains all game specific data
 * @author Eirik Måseidvåg
 */
export default class GameAssets extends GameData {
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
    public constructor(options: GameAssetsOptions) {
        super(options);
        this._assets = options.assets;
        this._maps = options.maps;
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
