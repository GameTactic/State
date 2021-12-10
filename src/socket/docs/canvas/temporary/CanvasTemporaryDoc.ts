import CanvasHistoryTemporary from '../../../../history/canvas/temporary/CanvasHistoryTemporary';
import RoomSocketDoc from '../../RoomSocketDoc';
import CanvasElement from '../../../../canvas/elements/abstract/CanvasElement';
import { HistoryEventCanvas, HistoryEventModules } from '../../../../history';
import { SubscriberLevel } from '../../types';

export default class CanvasTemporaryDoc extends RoomSocketDoc {
    public constructor() {
        super({
            title: 'Draw Temporary Canvas Element',
            description: 'Draw a temporary element to the canvas.',
            module: HistoryEventModules.CANVAS,
            event: HistoryEventCanvas.TEMPORARY,
            level: SubscriberLevel.VIEW,
            permissionScope: 'user'
        });
    }
}

export type CanvasTemporaryDocPayload = {
    history: CanvasHistoryTemporary;
    data: CanvasElement[];
}
