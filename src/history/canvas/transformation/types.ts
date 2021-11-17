import { AbstractHistoryOptions } from '../../types';
import { Matrix } from '@pixi/math';

export interface CanvasHistoryTransformationOptions extends AbstractHistoryOptions {
  changes: Array<TransformationChange>;
}

/**
 * Dimensions are not included as it is not possible to change the initial width and height
 * Instead the scale should be changed
 */
export interface TransformationChange {
  elementId: string;
  from: {
    transform: Matrix;
  };
  to: {
    transform: Matrix;
  };
}
