import { ResourceOptions, ResourceType } from './types';
import CanvasElementPlugin from '../elements/plugin/abstract/CanvasElementPlugin';
import { defaultCanvasElementOptions, TransformPermissions } from '../elements/abstract';
import Image from '../../misc/image/Image';

/**
 * A resource includes data to construct icons or entities
 * @author Eirik Måseidvåg
 */
export default class Resource {
    /**
     * The label of the resource
     */
    public label: string;

    /**
     * The image of the resource to be used on the canvas
     * @public
     */
    public icon: Image;

    /**
     * The width of the resource on the canvas
     * @public
     */
    public width: number

    /**
     * The height of the resource on the canvas
     * @public
     */
    public height: number

    /**
     * Determines weather or not the color of the team the entity belongs to should be tinted on the icon on the canvas
     * Only if resource is an entity
     * @public
     */
    public useTeamTint: boolean

    /**
     * Determines which transforms are allowed to be preformed
     */
    public permissions: TransformPermissions

    /**
     * Determines if the canvas element should be displayed for only a set period of time
     * @public
     */
    public readonly temporary: boolean

    /**
     * Return the type of the resource
     * @returns ResourceType
     */
    public type: ResourceType

    /**
     * The resource plugin for the canvas
     * @public
     */
    public plugins: Array<CanvasElementPlugin>

    /**
     * The text that goes under the label for the entity inside the teams list of entities
     */
    public caption: string

    /**
     * The picture to be used for this icon in non canvas situations
     */
    public picture: Image

    /**
     * Determines weather or not the resource should be displayed on the default bar
     * Only the most frequently used resource should be default resource
     */
    public isDefault: boolean

    /**
     * The categories the resource falls under
     * This can be 'Marksman' for league of legends, 'Utility' etc.
     * Should use the pretty name as it will be displayed in the filter.
     */
    public categories: Array<string>

    /**
     * Construct the resource
     * @param options
     */
    constructor (options: ResourceOptions) {
        this.label = options.label;
        this.icon = options.icon;
        this.permissions = options.permissions || defaultCanvasElementOptions.permissions;
        this.temporary = options.temporary;
        this.type = options.type;
        this.plugins = options.plugins;
        this.caption = options.caption;
        this.picture = options.picture;
        this.isDefault = options.isDefault !== undefined ? options.isDefault : false;
        this.categories = options.categories || [];
        this.width = options.width;
        this.height = options.height;
        this.useTeamTint = options.useTeamTint !== undefined ? options.useTeamTint : false;
    }
}
