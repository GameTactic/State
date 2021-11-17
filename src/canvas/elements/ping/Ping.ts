/**
 * This class represents a ping on the canvas
 * @author Eirik Måseidvåg
 */
import { CanvasElementName } from '..';
import { PingOptions } from './types';
import CanvasElement from '../abstract/CanvasElement';

export default class Ping extends CanvasElement {
    /**
     * The color of the ping. Represented as a hexadecimal number
     * E.g. 0xffffff (white)
     * @public
     */
    public color: number

    /**
     * The size of the ping
     */
    public size: number

    /**
     * Returns the type of this canvas element
     * @returns CanvasElementName.PING
     */
    public name = CanvasElementName.PING

    /**
     * Construct the object
     * @param options: CircleOptions
     */
    constructor (options: PingOptions) {
        super(Object.assign({}, options, { temporary: true }));
        this.color = options.color;
        this.size = options.size;
    }
}
