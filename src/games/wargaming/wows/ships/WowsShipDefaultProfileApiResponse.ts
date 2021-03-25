import WowsShipDistanceApiResponse from './WowsShipDistanceApiResponse';
import WowsShipConcealmentApiResponse from './WowsShipConcealmentApiResponse';
import { WowsShipDefaultProfileApiResponseOptions } from './types';

export default class WowsShipDefaultProfileApiResponse {
  /**
   * Secondary armament range. If the module is absent on the ship, field value is null.
   * @public
   */
  public readonly atbas: WowsShipDistanceApiResponse | undefined

  /**
   * Main battery range. If the module is absent on the ship, field value is null.
   * @public
   */
  public readonly artillery: WowsShipDistanceApiResponse | undefined

  /**
   * Torpedo tubes range. If the module is absent on the ship, field value is null.
   * @public
   */
  public readonly torpedoes: WowsShipDistanceApiResponse | undefined

  /**
   * Concealment of basic configuration
   * @public
   */
  public readonly concealment: WowsShipConcealmentApiResponse | undefined

  /**
   * Construct the object
   * @param options
   */
  constructor (options: WowsShipDefaultProfileApiResponseOptions) {
    this.atbas = options.atbas;
    this.artillery = options.artillery;
    this.torpedoes = options.torpedoes;
    this.concealment = options.concealment;
  }
}
