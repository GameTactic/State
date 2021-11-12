import { Dimensions } from '../../../util';
import GridGroup from '../grid/GridGroup';
import { ViewOptions } from './types';
import { v4 } from 'uuid';
import Image from '../../../misc/image/Image';

export default class View {
    /**
     * The ID of the view
     */
    public id: string

    /**
     * The name of the view
     */
    public name: string

    /**
     * The image of the map
     * @public
     */
    public image: Image

    /**
     * The view dimensions in the game units
     * @public
     */
    public dimensions: Dimensions

    /**
     * The grids for the view
     */
    public gridGroups: Array<GridGroup>

    /**
     * Construct the view
     * @param {ViewOptions} options: the view options
     */
    public constructor(options: ViewOptions) {
        this.id = options.id || v4();
        this.name = options.name;
        this.image = options.image;
        this.dimensions = options.dimensions;
        this.gridGroups = options.gridGroups;
    }
}
