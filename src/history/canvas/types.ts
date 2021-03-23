import {HistoryOptions} from "../types";
import User from "../../user/User";
import CanvasElement from "../../canvas/elements/abstract/CanvasElement";

export interface CanvasHistoryAdditionOptions extends HistoryOptions {
  creator: User;
  element: CanvasElement;
}

export enum HistoryEventCanvas {
  ADDITION = 'ADDITION'
}
