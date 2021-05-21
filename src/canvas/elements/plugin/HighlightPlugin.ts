import CanvasElementPlugin from './CanvasElementPlugin';
import { CanvasElementPluginType, HighlightPluginOptions } from './types';

/**
 * The highlight plugin displays a box around the canvas element to highlight it
 * Color for the highlight can be provided both as a default for the plugin or through
 * a override in the listener function
 * @author Eirmas
 */
export default class HighlightPlugin extends CanvasElementPlugin {
    /**
     * The event listener name to listen for
     * The function bound expects 2 parameters, enabled (boolean) and color (hexadecimal number, optional override)
     * @see HighlightListenerFunc
     */
    public listener: string

    /**
     * The color of the highlight
     * If undefined, default fallback color is used
     */
    public color: number | undefined

    /**
     * The canvas element plugin type
     */
    public name = CanvasElementPluginType.HIGHLIGHT

    /**
     * Construct the range plugin
     * @param options
     */
    constructor (options: HighlightPluginOptions) {
        super(options);
        this.listener = options.listener;
        this.color = options.color;
    }
}
