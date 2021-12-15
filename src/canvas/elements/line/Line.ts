/**
 * This class represents a line line on the canvas
 * @author Eirik Måseidvåg
 */
import { CanvasElementName } from '..';
import { LineOptions, defaultLineOptions, LineStrokeStyle, LineHeadStyle } from './types';
import CanvasElement from '../abstract/CanvasElement';

export default class Line extends CanvasElement {
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
   * The style of the lines border
   * @public
   */
  public strokeStyle: LineStrokeStyle


  /**
   * The style of the lines border
   * @public
   */
  public headStyle: LineHeadStyle

  /**
   * The opacity of the lines body. Represented by a float between 0 and 1
   * @public
   */
  public opacity: number

  /**
   * The point to draw the line from
   * @public
   */
  public from: { x: number; y: number }

  /**
   * The point to draw the line to
   * @public
   */
  public to: { x: number; y: number }

  /**
   * Returns the type of this canvas element
   * @returns CanvasElementName.LINE
   */
  public name = CanvasElementName.LINE

  /**
   * Construct the object
   * @param options: LineOptions
   */
  constructor (options: LineOptions) {
    super(options);
    const opt = Object.assign({}, defaultLineOptions, options);
    this.strokeStyle = opt.strokeStyle;
    this.headStyle = opt.headStyle;
    this.opacity = opt.opacity;
    this.strokeWidth = opt.strokeWidth;
    this.color = opt.color;
    this.from = opt.from;
    this.to = opt.to;
  }
}
