import { IconOptions } from './types';
import IconPlugin from './plugins/IconPlugin';
import Transformable from '../elements/abstract/Transformable';
import { Dimensions } from '../../util';

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
    }
}
