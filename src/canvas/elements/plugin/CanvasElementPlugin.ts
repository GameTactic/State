import { CanvasElementPluginOptions, CanvasElementPluginType } from './types';
import { v4 } from 'uuid';

/**
 * An canvas element plugin can be used to give canvas elements extra functionality
 *
 * Examples:
 * Plugins can bound to the canvas elements event listeners to execute custom logic
 * Plugins can mutate the PIXI object to alter their appearance
 * @author Eirmas
 */
export default abstract class CanvasElementPlugin {
    /**
     * The ID of the plugin
     */
    public id: string

    /**
     * The label of the plugin
     */
    public label: string

    /**
     * Determines whether or not the plugin can be altered by the user or not
     */
    public readonly: boolean

    /**
     * Determines whether or not the plugin should be rendered visible on the canvas
     */
    public visible: boolean

    /**
     * Determines whether or not the plugin can be toggled in visibility on the canvas
     */
    public toggleable: boolean

    /**
     * The type of canvas element plugin
     * Used to determine which class the plugin shall be rendered with in PIXI
     */
    public abstract name: CanvasElementPluginType

    /**
     * Construct the plugin
     * @param options
     * @protected
     */
    protected constructor(options: CanvasElementPluginOptions) {
        this.id = options.id || v4();
        this.label = options.label;
        this.readonly = options.readonly;
        this.visible = options.visible;
        this.toggleable = options.toggleable;
    }
}
