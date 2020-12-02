import { CanvasElement } from '../../../canvas';

export interface TransformData {
    from: CanvasElement['attrs'];
    to: CanvasElement['attrs'];
    groups: string[];
}
