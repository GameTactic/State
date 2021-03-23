export default class WowsShipConcealmentApiResponse {
  /**
   * The detect distance by a plane
   * @private
   */
  private readonly _detectDistanceByPlane: number;

  /**
   * The detect distance by a ship
   * @private
   */
  private readonly _detectDistanceByShip: number;

  /**
   * Construct the Wows concealment Api response object
   * @param detectDistanceByPlane
   * @param detectDistanceByShip
   */
  constructor (
    detectDistanceByPlane: number,
    detectDistanceByShip: number
  ) {
    this._detectDistanceByPlane = detectDistanceByPlane;
    this._detectDistanceByShip = detectDistanceByShip;
  }

  /**
   * Returns the detect distance by a plane
   * @returns detectDistanceByPlane: number
   */
  get detectDistanceByPlane (): number {
    return this._detectDistanceByPlane;
  }

  /**
   * Returns the detect distance by a ship
   * @returns detectDistanceByShip: number
   */
  get detectDistanceByShip (): number {
    return this._detectDistanceByShip;
  }
}
