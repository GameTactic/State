/**
 * The class to extend to make a canvas element transformable
 * @author Eirmas
 */
import CanvasElement from "./CanvasElement";
import {TransformableOptions, TransformInterface} from "./types";
import {Point} from "../../../util";

export default abstract class Transformable extends CanvasElement {
  /**
   * The transform data. Includes skew, scale and rotation
   * @private
   */
  private _transform: Required<TransformInterface>

  /**
   * Construct the object
   * @protected
   * @param options
   */
  protected constructor (options: TransformableOptions) {
    super(options)
    this._transform = Object.assign({}, {
      skew: {
        x: 0,
        y: 0
      },
      scale: {
        x: 1,
        y: 1
      },
      rotation: 0
    }, options.transform || {})
  }

  /**
   * Returns if the canvas element is transformable
   * @returns true
   */
  get isTransformable () {
    return true
  }

  /**
   * Returns the transform object
   * @return transform: TransformInterface
   */
  get transform (): Required<TransformInterface> {
    return this._transform
  }

  /**
   * Sets the transform object
   * @param value
   */
  set transform (value: Required<TransformInterface>) {
    this._transform = value
  }

  /**
   * Returns the skew
   */
  get skew (): Point {
    return this._transform.skew
  }

  /**
   * Sets the skew
   * @param value: Point
   */
  set skew (value: Point) {
    this._transform.skew = value
  }

  /**
   * Returns the X-axis skew
   */
  get skewX (): number {
    return this._transform.skew.x
  }

  /**
   * Sets the X-axis skew
   * @param value: number
   */
  set skewX (value: number) {
    this._transform.skew.x = value
  }

  /**
   * Returns the Y-axis skew
   */
  get skewY (): number {
    return this._transform.skew.y
  }

  /**
   * Sets the Y-axis skew
   * @param value: number
   */
  set skewY (value: number) {
    this._transform.skew.y = value
  }

  /**
   * Returns the scale
   */
  get scale (): Point {
    return this._transform.scale
  }

  /**
   * Sets the scale
   * @param value: Point
   */
  set scale (value: Point) {
    this._transform.scale = value
  }

  /**
   * Returns the X-axis scale
   */
  get scaleX (): number {
    return this._transform.scale.x
  }

  /**
   * Sets the X-axis scale
   * @param value: number
   */
  set scaleX (value: number) {
    this._transform.scale.x = value
  }

  /**
   * Returns the Y-axis scale
   */
  get scaleY (): number {
    return this._transform.scale.y
  }

  /**
   * Sets the Y-axis scale
   * @param value: number
   */
  set scaleY (value: number) {
    this._transform.scale.y = value
  }

  /**
   * Returns the rotation in radians
   */
  get rotation (): number {
    return this._transform.rotation
  }

  /**
   * Sets the rotation
   * The number is given in radians.
   * Def: -Math.PI < x <= Math.PI
   * @param value: number
   */
  set rotation (value: number) {
    this._transform.rotation = value
  }
}
