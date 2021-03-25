import WowsShipDistanceApiResponse from './WowsShipDistanceApiResponse';
import WowsShipConcealmentApiResponse from './WowsShipConcealmentApiResponse';
import { WowsShipDefaultProfileApiResponseOptions } from './types';

export default class WowsShipDefaultProfileApiResponse {
  /**
   * Secondary armament range. If the module is absent on the ship, field value is null.
   * @private
   */
  private readonly _atbas: WowsShipDistanceApiResponse | undefined

  /**
   * Main battery range. If the module is absent on the ship, field value is null.
   * @private
   */
  private readonly _artillery: WowsShipDistanceApiResponse | undefined

  /**
   * Torpedo tubes range. If the module is absent on the ship, field value is null.
   * @private
   */
  private readonly _torpedoes: WowsShipDistanceApiResponse | undefined

  /**
   * Concealment of basic configuration
   * @private
   */
  private readonly _concealment: WowsShipConcealmentApiResponse | undefined

  /**
   * Construct the object
   * @param options
   */
  constructor (options: WowsShipDefaultProfileApiResponseOptions) {
    this._atbas = options.atbas;
    this._artillery = options.artillery;
    this._torpedoes = options.torpedoes;
    this._concealment = options.concealment;
  }

  /**
   * Returns the secondary armament range. If the module is absent on the ship, field value is null.
   * @returns atbas: WowsShipDistanceApiResponseWowsShipDistanceApiResponse
   */
  get atbas (): WowsShipDistanceApiResponse | undefined {
    return this._atbas;
  }

  /**
   * Returns the main battery range. If the module is absent on the ship, field value is null.
   * @returns artillery: WowsShipDistanceApiResponseWowsShipDistanceApiResponse
   */
  get artillery (): WowsShipDistanceApiResponse | undefined {
    return this._artillery;
  }

  /**
   * Returns the torpedo tubes range. If the module is absent on the ship, field value is null.
   * @returns torpedoes: WowsShipDistanceApiResponseWowsShipDistanceApiResponse
   */
  get torpedoes (): WowsShipDistanceApiResponse | undefined {
    return this._torpedoes;
  }

  /**
   * Returns the concealment of basic configuration. If the module is absent on the ship, field value is null.
   * @returns concealment: WowsShipConcealmentApiResponse
   */
  get concealment (): WowsShipConcealmentApiResponse | undefined {
    return this._concealment;
  }
}
