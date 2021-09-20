import { AssetOptions, AssetType } from './types';
import CanvasElementPlugin from '../plugin/CanvasElementPlugin';
import { defaultCanvasElementOptions, TransformPermissions } from '../abstract';
import { Dimensions } from '../../../util';

/**
 * An asset includes data to construct multiple icons
 * The difference between an asset and an asset is that an asset does not include data such as point on canvas, ID etc...
 * @author Eirmas
 */
export default class Asset {
    /**
     * The label of the asset
     */
    public label: string;

    /**
     * The URL to the image of the map
     * Defined as object because of socket issues
     * @public
     */
    public url: string;

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
     * Return the type of the asset
     * @returns AssetType
     */
    public type: AssetType

    /**
     * The asset plugin for the canvas
     * @public
     */
    public plugins: Array<CanvasElementPlugin>

    /**
     * The text that goes under the label for the entity inside the teams list of entities
     */
    public caption: string

    /**
     * The picture used for the entity inside the teams list of entities
     */
    public picture: string

    /**
     * The dimensions of the asset
     */
    public dimensions: Dimensions

    /**
     * Determines weather or not the asset should be displayed on the default bar
     * Only the most frequently used assets should be default assets
     */
    public isDefault: boolean

    /**
     * The categories the asset falls under
     * This can be 'Marksman' for league of legends, 'Utility' etc.
     * Should use the pretty name as it will be displayed in the filter.
     */
    public categories: Array<string>

    /**
     * Construct the asset
     * @param options
     */
    constructor (options: AssetOptions) {
        this.label = options.label;
        this.url = options.url;
        this.dimensions = options.dimensions;
        this.permissions = options.permissions || defaultCanvasElementOptions.permissions;
        this.temporary = options.temporary;
        this.type = options.type;
        this.plugins = options.plugins;
        this.caption = options.caption;
        this.picture = options.picture;
        this.isDefault = options.isDefault || false;
        this.categories = options.categories || [];
    }
}
