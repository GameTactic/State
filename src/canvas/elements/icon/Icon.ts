import { IconOptions, IconResource } from './types';
import { CanvasElementName } from '../abstract';
import CanvasElement from '../abstract/CanvasElement';

/**
 * The icon class
 * @author Eirik Måseidvåg
 */
export default class Icon extends CanvasElement {
    /**
     * The resource
     */
    public resource: IconResource;
    /**
     * Return the name of the canvas element
     * @returns CanvasElementName
     */
    public name = CanvasElementName.ICON;

    /**
     * Construct the instance
     * @param options
     * @protected
     */
    constructor (options: IconOptions) {
        super({
            ...options,
            temporary: options.resource.temporary,
            permissions: options.resource.permissions,
            plugins: options.resource.plugins
        });
        this.resource = options.resource;
    }
}
