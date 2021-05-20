import { IconOptions } from './types';
import IconPlugin from './plugins/IconPlugin';
import Transformable from '../elements/abstract/Transformable';
import { Dimensions, Point } from '../../util';

/**
 * The icon class
 * @author Eirmas
 * @abstract
 */
export default class Icon extends Transformable {
    /**
     * The label of the icon
     */
    public label: string

    /**
     * The icon plugins for the canvas
     * @public
     */
    public plugins: Array<IconPlugin>

    /**
     * The URL to the image of the map
     * Defined as object because of socket issues
     * @public
     */
    public url: string

    /**
     * The icon dimensions
     * @public
     */
    public dimensions: Dimensions

    /**
     * The point on the canvas to draw the icon
     * Represents the top left corner of the image
     * @public
     */
    public point: Point

    /**
     * Construct the instance
     * @param options
     * @protected
     */
    constructor (options: IconOptions) {
        super(options);
        this.label = options.label;
        this.plugins = options.plugins || [];
        this.url = options.url;
        this.dimensions = options.dimensions;
        this.point = options.point;
    }
}
