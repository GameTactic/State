import { IconOptions } from './types';
import Transformable from '../abstract/Transformable';
import { Dimensions, Point } from '../../../util';
import { CanvasElementName } from '../abstract';

/**
 * The icon class
 * @author Eirmas
 */
export default class Icon extends Transformable {
    /**
     * The label of the icon
     */
    public label: string

    /**
     * The URL to the image of the icon
     * Defined as string because of socket issues
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
     * Return the name of the canvas element
     * @returns CanvasElementName
     */
    public name = CanvasElementName.ICON;

    /**
     * The text that goes under the label for the entity inside the teams list of entities
     */
    public caption: string

    /**
     * The picture used for the entity inside the teams list of entities
     */
    public picture: string

    /**
     * Construct the instance
     * @param options
     * @protected
     */
    constructor (options: IconOptions) {
        super(options);
        this.label = options.label;
        this.url = options.url;
        this.dimensions = options.dimensions;
        this.point = options.point;
        this.caption = options.caption;
        this.picture = options.picture;
    }
}