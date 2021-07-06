import { AbstractHistoryOptions } from '../../types';
import { Matrix } from '../../../canvas/elements/transform';

export interface CanvasHistoryTransformationOptions extends AbstractHistoryOptions {
  changes: Array<TransformationChange>;
}

export interface TransformationChange {
  elementId: string;
  from: {
    local: Matrix;
    parent: Matrix;
  };
  to: {
    local: Matrix;
    parent: Matrix;
  };
}
