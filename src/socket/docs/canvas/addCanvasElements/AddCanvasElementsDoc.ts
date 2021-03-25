import CanvasHistoryAddition from '../../../../history/canvas/addition/CanvasHistoryAddition';
import SocketDoc, { SocketEventType } from '../../types';
import CanvasElement from '../../../../canvas/elements/abstract/CanvasElement';
import { HistoryEventCanvas, HistoryEventModules } from '../../../../history';

export default class AddCanvasElementsDoc implements SocketDoc {
    title = 'Add Canvas Element';
    description = 'Adds an element to the canvas.';
    event = `${HistoryEventModules.LIFECYCLE}/${HistoryEventCanvas.ADDITION}`;
    type = SocketEventType.IN_AND_OUT;
}

export type AddCanvasElementsDocPayload = {
    history: CanvasHistoryAddition;
    data: CanvasElement[];
}
