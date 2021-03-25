/**
 * The class to extend to make a canvas element transformable
 * @author Eirmas
 */
import CanvasElement from './CanvasElement';
import {defaultTransformableOptions, TransformableOptions, TransformInterface} from './types';
import { Point } from '../../../util';

export default abstract class Transformable extends CanvasElement {
  /**
   * The transform data. Includes skew, scale and rotation
   * @public
   */
  public transform: Required<TransformInterface>

  /**
   * Returns if the canvas element is transformable
   * @returns true
   */
  public isTransformable = true

  /**
   * Construct the object
   * @protected
   * @param options
   */
  protected constructor (options: TransformableOptions) {
    super(options);
    this.transform = Object.assign({}, defaultTransformableOptions, options.transform || {});
  }
}
