import { v4 } from 'uuid';
import HistoryEvent from './HistoryEvent';
import { HistoryOptions } from './types';
import { ISO } from '../util';

/**
 * Base class for a canvas history.
 */
export default abstract class History {
  /**
   * The ID of the canvas history object
   * @public
   */
  public readonly id: string

  /**
   * The timestamp when the history was created.
   * Represented in ISO format
   * @public
   */
  public readonly timestamp: number

  /**
   * The ID of the user who created the history
   * @public
   */
  public readonly creatorId: string

  /**
   * The event that took place
   * @public
   */
  public readonly event: HistoryEvent

  /**
   * Determines weather or not a history can be undone/redone
   */
  public readonly revertable: boolean

  protected constructor (options: HistoryOptions) {
    this.id = options.id || v4();
    this.timestamp = options.timestamp || ISO.timestamp();
    this.creatorId = options.creatorId;
    this.event = options.event;
    this.revertable = options.revertable || false;
  }
}
