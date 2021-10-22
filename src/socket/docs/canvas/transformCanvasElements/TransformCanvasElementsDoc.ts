import SocketDoc from '../../SocketDoc';
import { HistoryEventCanvas, HistoryEventModules } from '../../../../history';
import CanvasHistoryTransformation from '../../../../history/canvas/transformation/CanvasHistoryTransformation';
import {SubscriberLevel} from "../../types";

export default class TransformCanvasElementsDoc extends SocketDoc {
    public constructor() {
        super({
            title: 'Transform Canvas Element',
            description: 'Transforms an element on the canvas.',
            module: HistoryEventModules.CANVAS,
            event: HistoryEventCanvas.TRANSFORMATION,
            level: SubscriberLevel.TACTIC
        });
    }
}

export type TransformCanvasElementsDocPayload = {
    history: CanvasHistoryTransformation;
}
