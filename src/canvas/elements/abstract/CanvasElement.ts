import { v4 } from 'uuid';
import { CanvasElementInterface, CanvasElementName, CanvasElementOptions } from './types';

export default abstract class CanvasElement implements CanvasElementInterface {

  /**
   * The ID of the element as a UUID
   * @private
   */
  private readonly _id: string
  /**
   * Determines if the canvas element should be displayed for only a set period of time
   * @private
   */
  private readonly _temporary: boolean

  /**
   * The ID of the creator of the canvas element
   * @private
   */
  private readonly _creatorId: string

  /**
   * The ID of the tactic the canvas element relates to
   * @private
   */
  private readonly _tacticId: string

  protected constructor (options: CanvasElementOptions) {
    this._id = options.id || v4();
    this._temporary = options.temporary;
    this._creatorId = options.creatorId;
    this._tacticId = options.tacticId;
  }

  /**
   * Returns if the canvas element is transformable
   * @returns false
   */
  get isTransformable () {
    return false;
  }

  /**
   * Return the name of the canvas element
   * @returns CanvasElementName
   */
  get name (): CanvasElementName {
    return CanvasElementName.BASE;
  }

  /**
   * Returns the ID of the canvas element
   * @return string: UUIDv4
   */
  get id (): string {
    return this._id;
  }

  /**
   * Determines weather the element should be displayed on the canvas for a fixed period time or not
   * @return boolean
   */
  get temporary (): boolean {
    return this._temporary;
  }

  /**
   * Returns the ID of the creator of the canvas element
   * @returns string
   */
  get creatorId (): string {
    return this._creatorId;
  }

  /**
   * Returns the ID of the tactic the canvas element relates to
   * @returns tacticId: string
   */
  get tacticId (): string {
    return this._tacticId;
  }
}
