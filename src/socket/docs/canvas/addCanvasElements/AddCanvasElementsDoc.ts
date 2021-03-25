import CanvasHistoryAddition from '../../../../history/canvas/addition/CanvasHistoryAddition';
import SocketDoc, { SocketEventType } from '../../types';
import CanvasElement from '../../../../canvas/elements/abstract/CanvasElement';

export default class AddCanvasElementsDoc implements SocketDoc {
    title = 'Add Canvas Element';
    description = 'Adds an element to the canvas.';
    event = 'canvas/addCanvasElements';
    type = SocketEventType.IN_AND_OUT;
}

export type AddCanvasElementsDocPayload = {
    history: CanvasHistoryAddition;
    data: CanvasElement[];
}
