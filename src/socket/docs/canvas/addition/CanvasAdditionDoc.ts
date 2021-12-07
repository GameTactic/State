import CanvasHistoryAddition from '../../../../history/canvas/addition/CanvasHistoryAddition';
import RoomSocketDoc from '../../RoomSocketDoc';
import CanvasElement from '../../../../canvas/elements/abstract/CanvasElement';
import { HistoryEventCanvas, HistoryEventModules } from '../../../../history';
import { SubscriberLevel } from '../../types';

export default class CanvasAdditionDoc extends RoomSocketDoc {
    public constructor() {
        super({
            title: 'Add Canvas Element',
            description: 'Adds an element to the canvas.',
            module: HistoryEventModules.CANVAS,
            event: HistoryEventCanvas.ADDITION,
            level: SubscriberLevel.VIEW,
            permissionScope: 'user'
        });
    }
}

export type CanvasAdditionDocPayload = {
    history: CanvasHistoryAddition;
    data: CanvasElement[];
}
