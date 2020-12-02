import { Tracker} from '../..';
import { AdditionData, RedoData, UndoData, TransformData, RemovalData } from '../../../tools';

export interface CanvasElementHistory {
    id: string;
    jti: string;
    modifyType: Tracker;
    modifyData: AdditionData | RedoData | UndoData | TransformData | RemovalData;
    timestampModified: number;
}
