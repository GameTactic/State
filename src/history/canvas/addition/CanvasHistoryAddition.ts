/**
 * This class contains data of an addition event to the canvas
 * @author Eirmas
 */
import CanvasElement from "../../../canvas/elements/abstract/CanvasElement";
import {CanvasHistoryAdditionOptions} from "./types";
import History from "../../History";
import HistoryEvent from "../../HistoryEvent";
import {HistoryEventModules} from "../../types";
import {HistoryEventCanvas} from "../types";

export default class CanvasHistoryAddition extends History {
  /**
   * The canvas elements added to the canvas
   * @private
   */
  private readonly _elements: CanvasElement[]

  constructor (options: CanvasHistoryAdditionOptions) {
    super({
      ...options,
      event: new HistoryEvent({
        module: HistoryEventModules.CANVAS,
        event: HistoryEventCanvas.ADDITION
      })
    })
    this._elements = options.elements
  }

  /**
   * Return the element from the addition
   * @returns CanvasElement[]
   */
  get element (): CanvasElement[] {
    return this._elements
  }
}
