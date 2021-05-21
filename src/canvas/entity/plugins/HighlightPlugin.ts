import IconPlugin from './IconPlugin';
import { IconPluginType, HighlightPluginOptions } from './types';

/**
 * The range plugin displays a circle around the icon
 * @author Eirmas
 */
export default class HighlightPlugin extends IconPlugin {
    /**
     * The event listener name to listen for
     * The function bound expects 2 parameters, enabled (boolean) and color (hexadecimal number)
     * @see HighlightListenerFunc
     */
    public listener: string

    /**
     * The icon plugin type
     */
    public name = IconPluginType.HIGHLIGHT

    /**
     * Construct the range plugin
     * @param options
     */
    constructor (options: HighlightPluginOptions) {
        super(options);
        this.listener = options.listener;
    }
}
