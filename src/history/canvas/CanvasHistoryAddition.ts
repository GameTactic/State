/**
 * This class contains data of an addition event to the canvas
 * @author Eirmas
 */
import CanvasElement from "../../canvas/elements/abstract/CanvasElement";
import {CanvasHistoryAdditionOptions} from "./types";
import History from "../History";

export default class CanvasHistoryAddition extends History {
  /**
   * The canvas element added to the canvas
   * @private
   */
  private readonly _element: CanvasElement

  constructor (options: CanvasHistoryAdditionOptions) {
    super(options)
    this._element = options.element
  }

  /**
   * Return the element from the addition
   * @returns CanvasElement
   */
  get element (): CanvasElement {
    return this._element
  }
}
