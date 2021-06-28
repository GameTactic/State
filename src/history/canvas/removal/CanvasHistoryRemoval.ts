import { CanvasHistoryRemovalOptions } from './types';
import History from '../../History';
import HistoryEvent from '../../HistoryEvent';
import { HistoryEventModules } from '../../types';
import { HistoryEventCanvas } from '../types';

/**
 * This class contains data of a removal event to the canvas
 * @author Eirmas
 */
export default class CanvasHistoryRemoval extends History {
  /**
   * The canvas element IDs removed from the canvas
   * @public
   */
  public readonly elementIds: Array<string>

  /**
   * Construct the history object
   * @param options
   */
  constructor (options: CanvasHistoryRemovalOptions) {
    super({
      ...options,
      event: new HistoryEvent({
        module: HistoryEventModules.CANVAS,
        event: HistoryEventCanvas.REMOVAL,
      })
    });
    this.elementIds = options.elementIds;
  }
}
