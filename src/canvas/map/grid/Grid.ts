import { Dimensions } from '../../../util';
import { GridOptions } from './types';

export default class Grid {
    /**
     * The name of the grid
     */
    public name: string

    /**
     * Determines weather or not the grid is visible
     */
    public isVisible: boolean

    /**
     * The URL to the grid image
     */
    public url: string

    /**
     * The grid dimensions in the game units
     * Should be the same as the view dimensions
     * @public
     */
    public dimensions: Dimensions

    /**
     * Construct the grid
     * @param {GridOptions} options: the grid options
     */
    public constructor(options: GridOptions) {
        this.name = options.name;
        this.isVisible = options.isVisible;
        this.url = options.url;
        this.dimensions = options.dimensions;
    }
}
