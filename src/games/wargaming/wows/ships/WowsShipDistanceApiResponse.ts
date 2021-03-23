export default class WowsShipDistanceApiResponse {
  /**
   * Distance value
   * @private
   */
  private readonly _distance: number;

  /**
   * Construct the Wows distance Api response object
   * @param distance
   */
  constructor (distance: number) {
    this._distance = distance;
  }

  /**
   * Returns the distance value
   * @returns distance: number
   */
  get distance (): number {
    return this._distance;
  }
}
