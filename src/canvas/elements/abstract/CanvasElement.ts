import { v4 } from 'uuid';
import {
  CanvasElementInterface,
  CanvasElementName,
  CanvasElementOptions,
  TransformPermissions,
  defaultCanvasElementOptions
} from './types';
import CanvasElementPlugin from '../plugin/CanvasElementPlugin';

export default abstract class CanvasElement implements CanvasElementInterface {
  /**
   * The ID of the element as a UUIDv4
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
   * The ID of the view the canvas element relates to
   * @public
   */
  public readonly viewId: string

  /**
   * Return the name of the canvas element
   * @returns CanvasElementName
   */
  public abstract name: CanvasElementName

  /**
   * The transformation data. Includes skew, scale and rotation
   * @public
   */
  public transform: Array<number>

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
   * Timestamp the canvas element was created
   * @public
   */
  public readonly timestamp: number

  /**
   * Construct the canvas element
   * @param options
   * @protected
   */
  protected constructor (options: CanvasElementOptions) {
    const opt = Object.assign({}, defaultCanvasElementOptions, options);
    this.id = opt.id || v4();
    this.temporary = opt.temporary;
    this.creatorId = opt.creatorId;
    this.viewId = opt.viewId;
    this.plugins = opt.plugins;
    this.transform = opt.transform || [1, 0, 0, 0, 1, 0];
    this.permissions = opt.permissions;
    this.timestamp = opt.timestamp || Date.now();
  }
}
