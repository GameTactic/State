/**
 * This class represents a circle on the canvas
 * @author Eirmas
 */
import { CanvasElementName } from '..';
import { CircleOptions, CircleStrokeStyle, defaultCircleOptions } from './types';
import CanvasElement from '../abstract/CanvasElement';

export default class Circle extends CanvasElement {
  /**
   * The inner fill of the circle. Represented as a hexadecimal number
   * E.g. 0xffffff (white)
   * @public
   */
  public fill: number

  /**
   * The fill of the border of the circle. Represented as a hexadecimal number
   * E.g. 0xffffff (white)
   * @public
   */
  public borderFill: number

  /**
   * The size of the border and radius line
   * @public
   */
  public size: number

  /**
   * The style of the circles border
   * @public
   */
  public strokeStyle: CircleStrokeStyle

  /**
   * Determines weather to display or hide the circles radius line
   * @public
   */
  public showRadius: boolean

  /**
   * The opacity of the circles body. Represented by a float between 0 and 1
   * @public
   */
  public fillOpacity: number

  /**
   * The opacity of the circles border. Represented by a float between 0 and 1
   * @public
   */
  public borderOpacity: number

  /**
   * The radius rotation
   */
  public radiusRotation: number

  /**
   * Returns the type of this canvas element
   * @returns CanvasElementName.CIRCLE
   */
  public name = CanvasElementName.CIRCLE

  /**
   * Construct the object
   * @param options: CircleOptions
   */
  constructor (options: CircleOptions) {
    super(options);
    const completedOptions = Object.assign({}, defaultCircleOptions, options);
    this.fill = completedOptions.fill;
    this.borderFill = completedOptions.borderFill;
    this.size = completedOptions.size;
    this.strokeStyle = completedOptions.strokeStyle;
    this.showRadius = completedOptions.showRadius;
    this.fillOpacity = completedOptions.fillOpacity;
    this.borderOpacity = completedOptions.borderOpacity;
    this.radiusRotation = completedOptions.radiusRotation;
  }
}
