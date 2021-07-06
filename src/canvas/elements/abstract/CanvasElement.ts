import { v4 } from 'uuid';
import {
  CanvasElementInterface,
  CanvasElementName,
  CanvasElementOptions,
  TransformPermissions,
  defaultCanvasElementOptions
} from './types';
import CanvasElementPlugin from '../plugin/CanvasElementPlugin';
import { Matrix } from '../transform';
import { Dimensions } from '../../../util';

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
  public transform: Matrix

  /**
   * The dimensions of the elemenet
   */
  public dimensions: Dimensions

  /**
   * The rotation of the element
   */
  public rotation: number;

  /**
   * The parent transform
   */
  public parentTransform: Matrix

  /**
   * Determines which transforms are allowed to be preformed
   */
  public permissions: TransformPermissions

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
    const finalOptions = Object.assign({}, defaultCanvasElementOptions, options);
    this.id = options.id || v4();
    this.temporary = options.temporary;
    this.creatorId = options.creatorId;
    this.tacticId = options.tacticId;
    this.plugins = options.plugins || [];
    this.rotation = options.rotation ?? 0;
    this.dimensions = options.dimensions;
    this.transform = finalOptions.transform;
    this.permissions = finalOptions.permissions;
    this.parentTransform = finalOptions.parentTransform;
  }
}
