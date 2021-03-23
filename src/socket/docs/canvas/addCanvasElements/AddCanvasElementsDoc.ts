import CanvasHistoryAddition from "../../../../history/canvas/addition/CanvasHistoryAddition";
import SocketDoc, {SocketEventType} from "../../types";

export default class AddCanvasElementsDoc implements SocketDoc<AddCanvasElementsDocPayload> {
    title = 'Add Canvas Element';
    description = 'Adds an element to the canvas.';
    event = 'canvas/addCanvasElements';
    type = SocketEventType.IN_AND_OUT;
}

export type AddCanvasElementsDocPayload = CanvasHistoryAddition
