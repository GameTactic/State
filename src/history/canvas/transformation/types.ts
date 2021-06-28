import { AbstractHistoryOptions } from '../../types';
import { TransformInterface } from '../../../canvas/elements/abstract';

export interface CanvasHistoryTransformationOptions extends AbstractHistoryOptions {
  changes: Array<TransformationChange>;
}

export interface TransformationChange {
  elementId: string;
  from: Required<TransformInterface>;
  to: Required<TransformInterface>;
}
