/**
 * A class for a history event
 * @author Eirmas
 */
import { HistoryEventEnums, HistoryEventModules, HistoryEventOptions } from './types';
import { Serialize } from 'serialazy';
import SerializeHelper from '../util/SerializeHelper';

@Serialize<HistoryEventOptions, HistoryEvent>({
  down: ((history: HistoryEvent) => SerializeHelper.toDown(history)),
  up: ((options: HistoryEventOptions) => new HistoryEvent(options))
})
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
