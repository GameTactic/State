import { CanvasHistoryAdditionOptions } from './types';
import History from '../../History';
import HistoryEvent from '../../HistoryEvent';
import { HistoryEventModules } from '../../types';
import { HistoryEventCanvas } from '../types';

/**
 * This class contains data of an addition event to the canvas
 * @author Eirmas
 */
export default class CanvasHistoryAddition extends History {
  /**
   * The canvas element IDs added to the canvas
   * @public
   */
  public readonly elementIds: Array<string>

  /**
   * Construct the hisotry object
   * @param options
   */
  constructor (options: CanvasHistoryAdditionOptions) {
    super({
      ...options,
      event: new HistoryEvent({
        module: HistoryEventModules.CANVAS,
        event: HistoryEventCanvas.ADDITION,
      })
    });
    this.elementIds = options.elementIds;
  }
}
