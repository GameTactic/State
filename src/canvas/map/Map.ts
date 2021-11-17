import { MapOptions } from './types';
import View from './view/View';
import Image from '../../misc/image/Image';
import { Game } from '../../misc/games';

export default class Map {
    /**
     * The name of the map
     * @public
     */
    public name: string

    /**
     * Description of the map
     * @public
     */
    public description: string

    /**
     * The URL to the cover image of the map
     * @public
     */
    public cover: Image

    /**
     * The views of the map
     * Maps can have multiple views, but most of them only have one.
     * Rainbow Six Siege has different floors for their maps which is the reason we do it this way.
     */
    public views: Array<View>

    /**
     * The game the map is related to
     */
    public game: Game

    /**
     * Construct the map
     * @param options: MapOptions
     */
    constructor (options: MapOptions) {
        this.name = options.name;
        this.description = options.description;
        this.cover = options.cover;
        this.views = options.views;
        this.game = options.game;
    }
}
