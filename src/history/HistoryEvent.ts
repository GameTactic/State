/**
 * A class for a history event
 * @author Eirmas
 */
import {HistoryEventEnums, HistoryEventOptions} from "./types";
import {Namespaces} from "../modules/types";

export default class HistoryEvent {
  /**
   * The name of the module the event made changes to
   * @private
   */
  private readonly _module: Namespaces

  /**
   * The event that took place
   * @private
   */
  private readonly _event: HistoryEventEnums[Namespaces]

  /**
   * Construct the object
   * @param options
   */
  constructor (options: HistoryEventOptions) {
    this._module = options.module
    this._event = options.event
  }

  /**
   * Returns the name of the module the event made changes to
   * @returns module: Namespaces
   */
  get module (): Namespaces {
    return this._module
  }

  /**
   * Returns the event that took place
   * @returns event: HistoryEventEnums[Namespaces]
   */
  get event (): HistoryEventEnums[Namespaces] {
    return this._event
  }
}
