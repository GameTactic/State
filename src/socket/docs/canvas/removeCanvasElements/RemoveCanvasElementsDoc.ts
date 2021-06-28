import SocketDoc, { SocketEventType } from '../../types';
import { HistoryEventCanvas, HistoryEventModules } from '../../../../history';
import CanvasHistoryRemoval from '../../../../history/canvas/removal/CanvasHistoryRemoval';

export default class RemoveCanvasElementsDoc implements SocketDoc {
    title = 'Remove Canvas Element';
    description = 'Removes an element from the canvas.';
    event = `${HistoryEventModules.CANVAS}/${HistoryEventCanvas.REMOVAL}`;
    type = SocketEventType.IN_AND_OUT;
}

export type RemoveCanvasElementsDocPayload = {
    history: CanvasHistoryRemoval;
}
