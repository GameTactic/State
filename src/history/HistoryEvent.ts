/**
 * A class for a history event
 * @author Eirmas
 */
import {HistoryEventEnums, HistoryEventModules, HistoryEventOptions} from "./types";

export default class HistoryEvent {
  /**
   * The name of the history module the event made changes to
   * @private
   */
  private readonly _module: HistoryEventModules

  /**
   * The event that took place
   * @private
   */
  private readonly _event: HistoryEventEnums[HistoryEventModules]

  /**
   * Construct the object
   * @param options
   */
  constructor (options: HistoryEventOptions) {
    this._module = options.module
    this._event = options.event
  }

  /**
   * Returns the name of the history module the event made changes to
   * @returns module: HistoryEventModules
   */
  get module (): HistoryEventModules {
    return this._module
  }

  /**
   * Returns the event that took place
   * @returns event: HistoryEventEnums[HistoryEventModules]
   */
  get event (): HistoryEventEnums[HistoryEventModules] {
    return this._event
  }
}
