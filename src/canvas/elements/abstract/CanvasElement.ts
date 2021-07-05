import { v4 } from 'uuid';
import {
  CanvasElementInterface,
  CanvasElementName,
  CanvasElementOptions, defaultTransformableOptions,
  TransformInterface,
  TransformPermissionsInterface
} from './types';
import CanvasElementPlugin from '../plugin/CanvasElementPlugin';

export default abstract class CanvasElement implements CanvasElementInterface {
  /**
   * The ID of the element as a UUID
   * @public
   */
  public readonly id: string
  /**
   * Determines if the canvas element should be displayed for only a set period of time
   * @public
   */
  public readonly temporary: boolean

  /**
   * The ID of the creator of the canvas element
   * @public
   */
  public readonly creatorId: string

  /**
   * The ID of the tactic the canvas element relates to
   * @public
   */
  public readonly tacticId: string

  /**
   * Return the name of the canvas element
   * @returns CanvasElementName
   */
  public abstract name: CanvasElementName

  /**
   * The transformation data. Includes skew, scale and rotation
   * @public
   */
  public transform: Required<TransformInterface>

  /**
   * Determines which transforms are allowed to be preformed
   */
  public permissions: TransformPermissionsInterface

  /**
   * The icon plugin for the canvas
   * @public
   */
  public plugins: Array<CanvasElementPlugin>

  /**
   * Construct the canvas element
   * @param options
   * @protected
   */
  protected constructor (options: CanvasElementOptions) {
    const finalOptions = Object.assign({}, defaultTransformableOptions, options);
    this.id = options.id || v4();
    this.temporary = options.temporary;
    this.creatorId = options.creatorId;
    this.tacticId = options.tacticId;
    this.plugins = options.plugins || [];
    this.transform = finalOptions.transform;
    this.permissions = finalOptions.permissions;
  }
}
