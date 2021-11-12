import { IconOptions } from './types';
import { CanvasElementName } from '../abstract';
import CanvasElement from '../abstract/CanvasElement';
import Image from '../../../misc/image/Image';

/**
 * The icon class
 * @author Eirik Måseidvåg
 */
export default class Icon extends CanvasElement {
    /**
     * The label of the icon
     */
    public label: string

    /**
     * The image to be used on the canvas
     * @public
     */
    public icon: Image

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
     * The picture to be used for this icon in non canvas situations
     */
    public picture: Image

    /**
     * Determines weather or not this icon should be displayed in the defaults bar
     */
    public isDefault: boolean

    /**
     * Construct the instance
     * @param options
     * @protected
     */
    constructor (options: IconOptions) {
        super(options);
        this.label = options.label;
        this.icon = options.icon;
        this.caption = options.caption;
        this.picture = options.picture;
        this.isDefault = options.isDefault;
    }
}
