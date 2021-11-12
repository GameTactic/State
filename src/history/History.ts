import { v4 } from 'uuid';
import HistoryEvent from './HistoryEvent';
import { HistoryOptions } from './types';

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
   * @public
   */
  public readonly timestamp: Date

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

  protected constructor (options: HistoryOptions) {
    this.id = options.id || v4();
    this.timestamp = options.timestamp || new Date();
    this.creatorId = options.creatorId;
    this.event = options.event;
  }
}
