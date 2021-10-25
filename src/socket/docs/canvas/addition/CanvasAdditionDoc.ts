import CanvasHistoryAddition from '../../../../history/canvas/addition/CanvasHistoryAddition';
import SocketDoc from '../../SocketDoc';
import CanvasElement from '../../../../canvas/elements/abstract/CanvasElement';
import { HistoryEventCanvas, HistoryEventModules } from '../../../../history';
import { SubscriberLevel } from '../../types';

export default class CanvasAdditionDoc extends SocketDoc {
    public constructor() {
        super({
            title: 'Add Canvas Element',
            description: 'Adds an element to the canvas.',
            module: HistoryEventModules.CANVAS,
            event: HistoryEventCanvas.ADDITION,
            level: SubscriberLevel.VIEW
        });
    }
}

export type CanvasAdditionDocPayload = {
    history: CanvasHistoryAddition;
    data: CanvasElement[];
}
