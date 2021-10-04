import { WowsShipConcealmentApiResponseOptions } from './types';

export default class WowsShipConcealmentApiResponse {
  /**
   * The detect distance by a plane
   * @public
   */
  public readonly detectDistanceByPlane: number;

  /**
   * The detect distance by a ship
   * @public
   */
  public readonly detectDistanceByShip: number;

  /**
   * Construct the Wows concealment GameAssets response object
   * @param options
   */
  constructor (options: WowsShipConcealmentApiResponseOptions) {
    this.detectDistanceByPlane = options.detectDistanceByPlane;
    this.detectDistanceByShip = options.detectDistanceByShip;
  }
}
