import User from "../../../user/User";
import CanvasElement from "../../../canvas/elements/abstract/CanvasElement";
import {AbstractHistoryOptions} from "../../types";

export interface CanvasHistoryAdditionOptions extends AbstractHistoryOptions {
  creator: User;
  elements: CanvasElement[];
}
