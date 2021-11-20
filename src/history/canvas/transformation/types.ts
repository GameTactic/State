import { AbstractHistoryOptions } from '../../types';

export interface TransformationChange {
  id: string;
  from: Array<number>;
  to: Array<number>;
}

export interface CanvasHistoryTransformationOptions extends AbstractHistoryOptions {
  changes: Array<TransformationChange>;
}
