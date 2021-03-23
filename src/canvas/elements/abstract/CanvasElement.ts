import { v4 } from 'uuid';
import User from '../../../user/User';
import Tactic from '../../../tactic/Tactic';
import { CanvasElementInterface, CanvasElementName, CanvasElementOptions } from './types';

export default abstract class CanvasElement implements CanvasElementInterface {
  /**
   * Determines if the canvas element should be displayed for only a set period of time
   * @private
   */
  private readonly _temporary: boolean

  /**
   * The ID of the element as a UUID
   * @private
   */
  private readonly _id: string

  /**
   * Creator of the canvas element
   * @private
   */
  private readonly _creator: User

  /**
   * The tactic the canvas element relates to
   * @private
   */
  private readonly _tactic: Tactic

  protected constructor (options: CanvasElementOptions) {
    this._id = v4();
    this._temporary = options.temporary;
    this._creator = options.creator;
    this._tactic = options.tactic;
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
   * Returns the creator of the canvas element
   * @returns User
   */
  get creator (): User {
    return this._creator;
  }

  /**
   * Checks a string if it's a valid hexadecimal
   * @param value: string
   * @returns boolean
   */
  isHex (value: string): boolean {
    return Boolean(value.match(/^0x[0-9a-f]+$/i));
  }

  /**
   * Returns the tactic the canvas element relates to
   * @returns tactic: Tactic
   */
  get tactic (): Tactic {
    return this._tactic;
  }
}
