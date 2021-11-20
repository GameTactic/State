import { AbstractHistoryOptions } from '../../types';

export interface CanvasHistoryTransformationOptions extends AbstractHistoryOptions {
  changes: Array<{
    id: string;
    delta: Array<number>;
  }>;
}
