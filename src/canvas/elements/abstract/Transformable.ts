/**
 * The class to extend to make a canvas element transformable
 * @author Eirmas
 */
import CanvasElement from './CanvasElement';
import {
  defaultTransformableOptions,
  TransformableOptions,
  TransformInterface,
  TransformPermissionsInterface
} from './types';

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
   * Determines which transforms are allowed to be preformed
   */
  public permissions: TransformPermissionsInterface

  /**
   * Construct the object
   * @protected
   * @param options
   */
  protected constructor (options: TransformableOptions) {
    super(options);
    const finalOptions = Object.assign({}, defaultTransformableOptions, options);
    this.transform = finalOptions.transform;
    this.permissions = finalOptions.permissions;
  }
}
