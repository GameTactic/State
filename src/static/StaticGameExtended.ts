import Resource from '../canvas/resource/Resource';
import Map from '../canvas/map/Map';
import { StaticGameExtendedOptions } from './types';
import StaticGame from './StaticGame';

/**
 * This class contains all game specific data
 * @author Eirik Måseidvåg
 */
export default class StaticGameExtended extends StaticGame {
    /**
     * All the game entities
     * @private
     */
    private readonly _entities: Array<Resource>;

    /**
     * All the game icons
     * @private
     */
    private readonly _icons: Array<Resource>

    /**
     * All the game maps with their grids and views
     * @private
     */
    private readonly _maps: Array<Map>

    /**
     * Construct the instance
     * @param options
     */
    public constructor(options: StaticGameExtendedOptions) {
        super(options);
        this._entities = options.entities;
        this._icons = options.icons;
        this._maps = options.maps;
    }

    /**
     * Returns all entities
     * @returns {Array<Resource>} resource: the entities
     */
    get entities(): Array<Resource> {
        return this._entities;
    }

    /**
     * Returns all icons
     * @returns {Array<Resource>} resource: the icons
     */
    get icons(): Array<Resource> {
        return this._icons;
    }

    /**
     * Returns all maps
     * @returns {Array<Map>} maps: the resource
     */
    get maps(): Array<Map> {
        return this._maps;
    }
}
