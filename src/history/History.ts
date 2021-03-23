import { v4 } from 'uuid';
import User from '../user/User';
import HistoryEvent from './HistoryEvent';
import { HistoryOptions } from './types';
import { ISO } from '../util/ISO';

/**
 * Base class for a canvas history.
 */
export default abstract class History {
  /**
   * The ID of the canvas history object
   * @private
   */
  private readonly _id: string

  /**
   * The timestamp when the history was created.
   * Represented in ISO format
   * @private
   */
  private readonly _timestamp: number

  /**
   * The user who created the history
   * @private
   */
  private readonly _creator: User

  /**
   * The event that took place
   * @private
   */
  private readonly _event: HistoryEvent

  protected constructor (options: HistoryOptions) {
    this._id = options.id || v4();
    this._timestamp = options.timestamp || ISO.timestamp();
    this._creator = options.creator;
    this._event = options.event;
  }

  /**
   * The ID of the canvas history object as an UUID string
   * @returns id: string
   */
  get id (): string {
    return this._id;
  }

  /**
   * Returns a timestamp of when the canvas history was created
   * @returns timestamp: number
   */
  get timestamp (): number {
    return this._timestamp;
  }

  /**
   * Returns the creator of the canvas history
   * @returns creator: User
   */
  get editor (): User {
    return this._creator;
  }

  /**
   * Returns the canvas history event
   * @returns event: HistoryEvent
   */
  get event (): HistoryEvent {
    return this._event;
  }
}
