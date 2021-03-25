import { WowsShipDistanceApiResponseOptions } from './types';

export default class WowsShipDistanceApiResponse {
  /**
   * Distance value
   * @public
   */
  public readonly distance: number;

  /**
   * Construct the Wows distance Api response object
   * @param options
   */
  constructor (options: WowsShipDistanceApiResponseOptions) {
    this.distance = options.distance;
  }
}
