/**
 * This class represents text on the canvas
 * @author Eirik Måseidvåg
 */
import { CanvasElementName } from '..';
import { TextOptions, defaultTextOptions } from './types';
import CanvasElement from '../abstract/CanvasElement';

export default class Text extends CanvasElement {
  /**
   * The text to write
   */
  public text: string

  /**
   * The text color. Represented as a hexadecimal number
   * E.g. 0xffffff (white)
   * @public
   */
  public color: number

  /**
   * The color of the background. Represented as a hexadecimal number
   * Transparent if undefined
   * E.g. 0xffffff (white)
   * @public
   */
  public backgroundColor: number | undefined

  /**
   * The size of the text
   * @public
   */
  public size: number

  /**
   * The center point to put the text
   * @public
   */
  public point: { x: number; y: number }

  /**
   * Returns the type of this canvas element
   * @returns CanvasElementName.TEXT
   */
  public name = CanvasElementName.TEXT

  /**
   * Construct the object
   * @param options: TextOptions
   */
  constructor (options: TextOptions) {
    super(options);
    const opt = Object.assign({}, defaultTextOptions, options);
    this.text = opt.text;
    this.color = opt.color;
    this.backgroundColor = opt.backgroundColor;
    this.size = opt.size;
    this.point = opt.point;
  }
}
