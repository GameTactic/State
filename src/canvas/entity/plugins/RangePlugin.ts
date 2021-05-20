import IconPlugin from './IconPlugin';
import { IconPluginType, RangePluginOptions } from './types';

/**
 * The range plugin displays a circle around the icon
 * @author Eirmas
 */
export default class RangePlugin extends IconPlugin {
    /**
     * The range of the circle to be drawn as the radius in the games units
     */
    public range: number

    /**
     * The color of the border
     */
    public borderFill: string

    /**
     * The color of the circle fill
     */
    public fill: string

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
    public name = IconPluginType.RANGE

    /**
     * Construct the range plugin
     * @param options
     */
    constructor (options: RangePluginOptions) {
        super(options);
        this.range = options.range;
        this.borderFill = options.borderFill;
        this.borderOpacity = options.borderOpacity;
        this.fill = options.fill;
        this.fillOpacity = options.fillOpacity;
    }
}
