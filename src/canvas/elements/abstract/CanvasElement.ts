import { v4 } from 'uuid';
import { CanvasElementInterface, CanvasElementName, CanvasElementOptions } from './types';

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
   * Returns if the canvas element is transformable
   * @returns false
   */
  public isTransformable = false

  /**
   * Return the name of the canvas element
   * @returns CanvasElementName
   */
  public abstract name: CanvasElementName

  protected constructor (options: CanvasElementOptions) {
    this.id = options.id || v4();
    this.temporary = options.temporary;
    this.creatorId = options.creatorId;
    this.tacticId = options.tacticId;
  }
}
