import {IconPluginOptions, IconPluginType} from './types';
import { v4 } from 'uuid';

/**
 * An icon plugin can be used to give icons
 * @author Eirmas
 */
export default abstract class IconPlugin {
    /**
     * The ID of the plugin
     */
    public id: string

    /**
     * The label of the plugin
     */
    public label: string

    /**
     * Determines weather or not the plugin can be altered by the user or not
     */
    public readonly: boolean

    /**
     * Determines weather or not the plugin should be rendered visible on the canvas
     */
    public visible: boolean

    /**
     * Determines weather or not the plugin can be toggled in visibility on the canvas
     */
    public toggleable: boolean

    /**
     * The type of icon plugin
     * Used to determine which class the plugin shall be rendered with in PIXI
     */
    public abstract name: IconPluginType

    /**
     * Construct the plugin
     * @param options
     * @protected
     */
    protected constructor(options: IconPluginOptions) {
        this.id = options.id || v4();
        this.label = options.label;
        this.readonly = options.readonly;
        this.visible = options.visible;
        this.toggleable = options.toggleable;
    }
}
