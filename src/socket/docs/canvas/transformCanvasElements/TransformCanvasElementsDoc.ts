import SocketDoc from '../../types';
import { HistoryEventCanvas, HistoryEventModules } from '../../../../history';
import CanvasHistoryTransformation from '../../../../history/canvas/transformation/CanvasHistoryTransformation';

export default class TransformCanvasElementsDoc extends SocketDoc {
    public constructor() {
        super({
            title: 'Transform Canvas Element',
            description: 'Transforms an element on the canvas.',
            module: HistoryEventModules.CANVAS,
            event: HistoryEventCanvas.TRANSFORMATION
        });
    }
}

export type TransformCanvasElementsDocPayload = {
    history: CanvasHistoryTransformation;
}
