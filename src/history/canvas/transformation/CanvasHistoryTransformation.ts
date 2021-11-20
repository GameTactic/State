import { CanvasHistoryTransformationOptions } from './types';
import History from '../../History';
import HistoryEvent from '../../HistoryEvent';
import { HistoryEventModules } from '../../types';
import { HistoryEventCanvas } from '../types';

/**
 * This class contains data of a Transformation event to transformable canvas elements
 * @author Eirik Måseidvåg
 */
export default class CanvasHistoryTransformation extends History {
  /**
   * The changes made in the transformation
   * @public
   */
  public readonly delta: Array<number>

  /**
   * The ids of the canvas elements transformed
   */
  public readonly ids: Array<string>

  /**
   * Construct the history object
   * @param options
   */
  constructor (options: CanvasHistoryTransformationOptions) {
    super({
      ...options,
      event: new HistoryEvent({
        module: HistoryEventModules.CANVAS,
        event: HistoryEventCanvas.TRANSFORMATION,
      })
    });
    this.delta = options.delta;
    this.ids = options.ids;
  }
}
