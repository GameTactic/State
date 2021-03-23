/**
 * This class represents a circle on the canvas
 * @author Eirmas
 */
import Transformable from "../abstract/Transformable";
import {CanvasElementInterface, CanvasElementName} from "../abstract/types";
import {Point} from "../../../util";
import {CircleOptions, CircleStrokeStyle, defaultCircleOptions} from "./types";

export default class Circle extends Transformable implements CanvasElementInterface {
  /**
   * The inner fill of the circle. Represented as a hexadecimal number
   * E.g. 0xffffff (white)
   * @private
   */
  private _fill: number

  /**
   * The fill of the border of the circle. Represented as a hexadecimal number
   * E.g. 0xffffff (white)
   * @private
   */
  private _borderFill: number

  /**
   * The size of the border and radius line
   * @private
   */
  private _size: number

  /**
   * A point representing the center of the circle
   * @private
   */
  private _from: Point

  /**
   * A point on the border of the circle.
   * @private
   */
  private _to: Point

  /**
   * The style of the circles border
   * @private
   */
  private _strokeStyle: CircleStrokeStyle

  /**
   * Determines weather to display or hide the circles radius line
   * @private
   */
  private _showRadius: boolean

  /**
   * The opacity of the circles body. Represented by a float between 0 and 1
   * @private
   */
  private _fillOpacity: number

  /**
   * The opacity of the circles border. Represented by a float between 0 and 1
   * @private
   */
  private _borderOpacity: number

  /**
   * Construct the object
   * @param options: CircleOptions
   */
  constructor (options: CircleOptions) {
    super(options)
    const completedOptions = Object.assign({}, defaultCircleOptions, options)
    this._fill = completedOptions.fill
    this._borderFill = completedOptions.borderFill
    this._size = completedOptions.size
    this._from = completedOptions.from
    this._to = completedOptions.to
    this._strokeStyle = completedOptions.strokeStyle
    this._showRadius = completedOptions.showRadius
    this._fillOpacity = completedOptions.fillOpacity
    this._borderOpacity = completedOptions.borderOpacity
  }

  /**
   * Returns the type of this canvas element
   * @returns CanvasElementName.CIRCLE
   */
  getName = (): CanvasElementName => {
    return CanvasElementName.CIRCLE
  }

  /**
   * Returns if the radius line is displayed or not
   * @returns boolean
   */
  get showRadius (): boolean {
    return this._showRadius
  }

  /**
   * Set to display or hide the radius line
   * @param value: boolean
   */
  set showRadius (value: boolean) {
    this._showRadius = value
  }

  /**
   * Returns the circles stroke style
   * @returns CircleStrokeStyle
   */
  get strokeStyle (): CircleStrokeStyle {
    return this._strokeStyle
  }

  /**
   * Sets the stroke style of the circle
   * @param value: CircleStrokeStyle
   */
  set strokeStyle (value: CircleStrokeStyle) {
    this._strokeStyle = value
  }

  /**
   * Returns the point indicating border of the circle
   * @returns to: Point
   */
  get to (): Point {
    return this._to
  }

  /**
   * Set the border point of the circle
   * @param value: Point
   */
  set to (value: Point) {
    this._to = value
  }

  /**
   * Returns the center point of the circle
   * @returns from: Point
   */
  get from (): Point {
    return this._from
  }

  /**
   * Sets the center point of the circle
   * @param value: Point
   */
  set from (value: Point) {
    this._from = value
  }

  /**
   * Returns the size of the circles border and radius line
   * @returns size: number
   */
  get size (): number {
    return this._size
  }

  /**
   * Sets the size of the circles border and radius line
   * @param value: number
   */
  set size (value: number) {
    this._size = value
  }

  /**
   * Returns the circles border fill color represented by a hexadecimal number
   * @returns borderFill: number
   */
  get borderFill (): number {
    return this._borderFill
  }

  /**
   * Set the circles border fill
   * Throws an error if value is not hexadecimal
   * @param value: number
   */
  set borderFill (value: number) {
    if (this.isHex(value.toString())) {
      this._borderFill = value
    } else {
      throw new Error('Provided number is not hexadecimal')
    }
  }

  /**
   * Returns the circles fill color represented by a hexadecimal number
   * @returns fill: number
   */
  get fill (): number {
    return this._fill
  }

  /**
   * Set the circles fill
   * Throws an error if value is not hexadecimal
   * @param value: number
   * @throws Error
   */
  set fill (value: number) {
    if (this.isHex(value.toString())) {
      this._fill = value
    } else {
      throw new Error('Provided number is not hexadecimal')
    }
  }

  /**
   * Returns the fill opacity represented by a number between 0 and 1
   * @returns fillOpacity: number
   */
  get fillOpacity (): number {
    return this._fillOpacity
  }

  /**
   * Sets the fill opacity
   * Throws an error if the value is not between 0 and 1
   * @param value
   * @throws Error
   */
  set fillOpacity (value: number) {
    if (value >= 0 && value <= 1) {
      this._fillOpacity = value
    } else {
      throw new Error('The number must be between 0 and 1')
    }
  }

  /**
   * Returns the border opacity represented by a number between 0 and 1
   * @returns borderOpacity: number
   */
  get borderOpacity (): number {
    return this._borderOpacity
  }

  /**
   * Sets the border opacity
   * Throws an error if the value is not between 0 and 1
   * @param value
   * @throws Error
   */
  set borderOpacity (value: number) {
    if (value >= 0 && value <= 1) {
      this._borderOpacity = value
    } else {
      throw new Error('The number must be between 0 and 1')
    }
  }
}
