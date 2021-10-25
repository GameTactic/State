/**
 * A class for a history event
 * @author Eirik Måseidvåg
 */
import { HistoryEventEnums, HistoryEventModules, HistoryEventOptions } from './types';

export default class HistoryEvent {
  /**
   * The name of the history module the event made changes to
   * @public
   */
  public readonly module: HistoryEventModules

  /**
   * The event that took place
   * @public
   */
  public readonly event: HistoryEventEnums[HistoryEventModules]

  /**
   * Construct the object
   * @param options
   */
  constructor (options: HistoryEventOptions) {
    this.module = options.module;
    this.event = options.event;
  }
}
