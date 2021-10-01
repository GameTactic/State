import CanvasHistoryAddition from '../../../../history/canvas/addition/CanvasHistoryAddition';
import SocketDoc from '../../types';
import CanvasElement from '../../../../canvas/elements/abstract/CanvasElement';
import { HistoryEventCanvas, HistoryEventModules } from '../../../../history';

export default class AddCanvasElementsDoc extends SocketDoc {
    public constructor() {
        super({
            title: 'Add Canvas Element',
            description: 'Adds an element to the canvas.',
            module: HistoryEventModules.CANVAS,
            event: HistoryEventCanvas.ADDITION
        });
    }
}

export type AddCanvasElementsDocPayload = {
    history: CanvasHistoryAddition;
    data: CanvasElement[];
}
