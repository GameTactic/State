/**
 * This class represents a pencil line on the canvas
 * @author Eirik Måseidvåg
 */
import { CanvasElementName } from '..';
import { PencilOptions, defaultPencilOptions, PencilStrokeStyle } from './types';
import CanvasElement from '../abstract/CanvasElement';

export default class Pencil extends CanvasElement {
  /**
   * The color of the stroke. Represented as a hexadecimal number
   * E.g. 0xffffff (white)
   * @public
   */
  public color: number

  /**
   * The width of the stroke
   * @public
   */
  public strokeWidth: number

  /**
   * The style of the circles border
   * @public
   */
  public strokeStyle: PencilStrokeStyle

  /**
   * The opacity of the circles body. Represented by a float between 0 and 1
   * @public
   */
  public opacity: number

  /**
   * Returns the type of this canvas element
   * @returns CanvasElementName.PENCIL
   */
  public name = CanvasElementName.PENCIL

  /**
   * Construct the object
   * @param options: PencilOptions
   */
  constructor (options: PencilOptions) {
    super(options);
    const opt = Object.assign({}, defaultPencilOptions, options);
    this.strokeStyle = opt.strokeStyle;
    this.opacity = opt.opacity;
    this.strokeWidth = opt.strokeWidth;
    this.color = opt.color;
  }
}
