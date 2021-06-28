import SocketDoc, { SocketEventType } from '../../types';
import { HistoryEventCanvas, HistoryEventModules } from '../../../../history';
import CanvasHistoryTransformation from '../../../../history/canvas/transformation/CanvasHistoryTransformation';

export default class TransformCanvasElementsDoc implements SocketDoc {
    title = 'Transform Canvas Element';
    description = 'Transforms an element from the canvas.';
    event = `${HistoryEventModules.CANVAS}/${HistoryEventCanvas.TRANSFORMATION}`;
    type = SocketEventType.IN_AND_OUT;
}

export type TransformCanvasElementsDocPayload = {
    history: CanvasHistoryTransformation;
}
