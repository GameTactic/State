import { CanvasHistoryTemporaryOptions } from './types';
import History from '../../History';
import HistoryEvent from '../../HistoryEvent';
import { HistoryEventModules } from '../../types';
import { HistoryEventCanvas } from '../types';

/**
 * This class contains data of a temporary canvas element event to the canvas
 * @author Eirik Måseidvåg
 */
export default class CanvasHistoryTemporary extends History {
  /**
   * The canvas element IDs drawn to the canvas
   * @public
   */
  public readonly elementIds: Array<string>

  /**
   * Construct the history object
   * @param options
   */
  constructor (options: CanvasHistoryTemporaryOptions) {
    super({
      ...options,
      event: new HistoryEvent({
        module: HistoryEventModules.CANVAS,
        event: HistoryEventCanvas.TEMPORARY,
      })
    });
    this.elementIds = options.elementIds;
  }
}
