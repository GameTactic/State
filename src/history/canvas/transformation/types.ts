import { AbstractHistoryOptions } from '../../types';

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
    transform: Array<number>;
  };
  to: {
    transform: Array<number>;
  };
}
