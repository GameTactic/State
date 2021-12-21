/**
 * The shadow plugin draws a shadow around the canvas element
 * @author Eirik Måseidvåg
 */
import { CanvasElementPluginType } from '../abstract';
import { ShadowPluginOptions } from './types';
import CanvasElementPlugin from '../abstract/CanvasElementPlugin';

export default class ShadowPlugin extends CanvasElementPlugin {
    /**
     * The color of the shadow
     */
    public color: number

    /**
     * The opacity of the shadow
     */
    public opacity: number

    /**
     * The blur multiplier of the shadow
     */
    public blur: number

    /**
     * The canvas element plugin type
     */
    public name = CanvasElementPluginType.SHADOW

    /**
     * Construct the range plugin
     * @param options
     */
    constructor (options: ShadowPluginOptions) {
        super();
        this.color = options.color;
        this.opacity = options.opacity !== undefined ? options.opacity : 1;
        this.blur = options.blur !== undefined ? options.blur : 1;
    }
}
