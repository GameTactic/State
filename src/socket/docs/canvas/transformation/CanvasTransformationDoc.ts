import RoomSocketDoc from '../../RoomSocketDoc';
import { HistoryEventCanvas, HistoryEventModules } from '../../../../history';
import CanvasHistoryTransformation from '../../../../history/canvas/transformation/CanvasHistoryTransformation';
import { SubscriberLevel } from '../../types';

export default class CanvasTransformationDoc extends RoomSocketDoc {
    public constructor() {
        super({
            title: 'Transform Canvas Element',
            description: 'Transforms an element on the canvas.',
            module: HistoryEventModules.CANVAS,
            event: HistoryEventCanvas.TRANSFORMATION,
            level: SubscriberLevel.VIEW,
            permissionScope: 'editor'
        });
    }
}

export type CanvasTransformationDocPayload = {
    history: CanvasHistoryTransformation;
}
