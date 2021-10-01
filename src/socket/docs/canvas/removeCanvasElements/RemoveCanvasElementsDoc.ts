import SocketDoc from '../../types';
import { HistoryEventCanvas, HistoryEventModules } from '../../../../history';
import CanvasHistoryRemoval from '../../../../history/canvas/removal/CanvasHistoryRemoval';

export default class RemoveCanvasElementsDoc extends SocketDoc {
    public constructor() {
        super({
            title: 'Remove Canvas Element',
            description: 'Removes an element from the canvas.',
            module: HistoryEventModules.CANVAS,
            event: HistoryEventCanvas.REMOVAL
        });
    }
}

export type RemoveCanvasElementsDocPayload = {
    history: CanvasHistoryRemoval;
}
