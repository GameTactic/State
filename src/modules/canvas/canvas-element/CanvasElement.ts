import { Point } from '../../../util';
import { Tool } from '../../tools';
import { CanvasElementType } from '..';

export interface CanvasElement {
    id: string;
    tool: Tool;
    type: CanvasElementType;
    data: Record<string, any>;
    layerId: string;
    jti: string;
    isVisible: boolean;
    attrs: {
        position: Point;
        rotation: number;
        scaleX: number;
        scaleY: number;
        skewX: number;
        skewY: number;
    };
}
