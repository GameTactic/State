import { AbstractHistoryOptions } from '../../types';

export interface CanvasHistoryTransformationOptions extends AbstractHistoryOptions {
  delta: Array<number>;
  ids: Array<string>;
}
