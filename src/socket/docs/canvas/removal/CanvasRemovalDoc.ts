import RoomSocketDoc from '../../RoomSocketDoc';
import { HistoryEventCanvas, HistoryEventModules } from '../../../../history';
import CanvasHistoryRemoval from '../../../../history/canvas/removal/CanvasHistoryRemoval';
import { SubscriberLevel } from '../../types';

export default class CanvasRemovalDoc extends RoomSocketDoc {
    public constructor() {
        super({
            title: 'Remove Canvas Element',
            description: 'Removes an element from the canvas.',
            module: HistoryEventModules.CANVAS,
            event: HistoryEventCanvas.REMOVAL,
            level: SubscriberLevel.VIEW,
            permissionScope: 'user'
        });
    }
}

export type CanvasRemovalDocPayload = {
    history: CanvasHistoryRemoval;
}
