/**
 * The highlight plugin displays a box around the canvas element to highlight it
 * @author Eirik Måseidvåg
 */
import { CanvasElementPluginType } from '../abstract';
import CanvasElementPlugin from '../abstract/CanvasElementPlugin';
import { HighlightPluginOptions } from './types';

export default class HighlightPlugin extends CanvasElementPlugin {
    /**
     * The event listener name to listen for
     * The function bound expects 1 parameters, enabled (boolean)
     */
    public listener: string

    /**
     * The color of the highlight
     */
    public color: number

    /**
     * The canvas element plugin type
     */
    public name = CanvasElementPluginType.HIGHLIGHT

    /**
     * Construct the range plugin
     * @param options
     */
    constructor (options: HighlightPluginOptions) {
        super();
        this.listener = options.listener;
        this.color = options.color;
    }
}
