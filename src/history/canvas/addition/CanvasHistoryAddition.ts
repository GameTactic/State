/**
 * This class contains data of an addition event to the canvas
 * @author Eirmas
 */
import { CanvasHistoryAdditionOptions } from './types';
import History from '../../History';
import HistoryEvent from '../../HistoryEvent';
import { HistoryEventModules } from '../../types';
import { HistoryEventCanvas } from '../types';
import { Serialize } from 'serialazy';
import SerializeHelper from '../../../util/SerializeHelper';

@Serialize({
  down: ((history: CanvasHistoryAddition) => SerializeHelper.toDown(history)),
  up: ((options: CanvasHistoryAdditionOptions) => new CanvasHistoryAddition(options))
})
export default class CanvasHistoryAddition extends History {
  /**
   * The canvas element IDs added to the canvas
   * @private
   */
  private readonly _elementIds: Array<string>

  constructor (options: CanvasHistoryAdditionOptions) {
    super({
      ...options,
      event: new HistoryEvent({
        module: HistoryEventModules.CANVAS,
        event: HistoryEventCanvas.ADDITION
      })
    });
    this._elementIds = options.elementIds;
  }

  /**
   * Return the element IDs from the addition
   * @returns Array<string>
   */
  get elementIds (): Array<string> {
    return this._elementIds;
  }
}
