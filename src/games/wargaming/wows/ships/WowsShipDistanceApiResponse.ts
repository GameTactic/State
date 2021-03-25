import { WowsShipDistanceApiResponseOptions } from './types';

export default class WowsShipDistanceApiResponse {
  /**
   * Distance value
   * @private
   */
  private readonly _distance: number;

  /**
   * Construct the Wows distance Api response object
   * @param options
   */
  constructor (options: WowsShipDistanceApiResponseOptions) {
    this._distance = options.distance;
  }

  /**
   * Returns the distance value
   * @returns distance: number
   */
  get distance (): number {
    return this._distance;
  }
}
