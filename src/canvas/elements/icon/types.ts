import { Dimensions, Point } from '../../../util';
import CanvasElementPlugin from '../plugin/CanvasElementPlugin';
import { TransformableOptions } from '../abstract';

export interface IconOptions extends TransformableOptions {
    label: string;
    url: string;
    dimensions: Dimensions;
    point: Point;
}
