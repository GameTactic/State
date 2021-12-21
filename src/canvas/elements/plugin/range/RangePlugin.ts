/**
 * The range plugin displays a circle around the canvas element
 * @author Eirik Måseidvåg
 */
import CanvasElementPlugin from '../abstract/CanvasElementPlugin';
import { RangePluginOptions } from './types';
import { CanvasElementPluginType } from '../abstract';

export default class RangePlugin extends CanvasElementPlugin {
    /**
     * The event listener name to listen for events to update state
     * The function bound expects 1 parameters, enabled (boolean)
     */
    public listener: string | undefined

    /**
     * The range of the circle to be drawn as the radius in the games units
     */
    public radius: number

    /**
     * The color of the border. Represented as a hexadecimal number
     * E.g. 0xffffff (white)
     */
    public borderFill: number

    /**
     * The color of the circle fill. Represented as a hexadecimal number
     * E.g. 0xffffff (white)
     */
    public fill: number

    /**
     * Weather or not it should be enabled from the start
     */
    public enabled: boolean

    /**
     * The opacity of the border
     */
    public borderOpacity: number

    /**
     * The opacity of the fill
     */
    public fillOpacity: number

    /**
     * The icon plugin type
     */
    public name = CanvasElementPluginType.RANGE

    /**
     * Construct the range plugin
     * @param options
     */
    constructor (options: RangePluginOptions) {
        super();
        this.radius = options.radius;
        this.borderFill = options.borderFill;
        this.borderOpacity = options.borderOpacity;
        this.fill = options.fill;
        this.fillOpacity = options.fillOpacity;
        this.enabled = options.enabled;
        this.listener = options.listener;
    }
}
