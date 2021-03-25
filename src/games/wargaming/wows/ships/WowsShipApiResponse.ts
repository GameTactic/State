import WgDataApiResponse from '../../WgDataApiResponse';
import WowsShipDefaultProfileApiResponse from './WowsShipDefaultProfileApiResponse';
import { WowsShipApiResponseOptions } from './types';

export default class WowsShipApiResponse extends WgDataApiResponse {
  /**
   * Is the ship special ?
   * @private
   */
  private readonly _isSpecial: boolean;

  /**
   * Is the ship premium ?
   * @private
   */
  private readonly _isPremium: boolean;

  /**
   * Ship id
   * @private
   */
  private readonly _shipId: number;

  /**
   * Ship default profile
   * @private
   */
  private readonly _defaultProfile: WowsShipDefaultProfileApiResponse;

  /**
   * Ship tier
   * @private
   */
  private readonly _tier: number;

  /**
   * Ship name
   * @private
   */
  private readonly _name: string;

  /**
   * Ship type
   * @private
   */
  private readonly _type: string;

  /**
   * Construct the Wows ship Api response
   * @param options
   */
  constructor (options: WowsShipApiResponseOptions) {
    super();
    this._isSpecial = options.isSpecial;
    this._isPremium = options.isPremium;
    this._shipId = options.shipId;
    this._defaultProfile = options.defaultProfile;
    this._tier = options.tier;
    this._name = options.name;
    this._type = options.type;
  }

  /**
   * Returns if the ship is special
   * @returns isSpecial: boolean
   */
  get isSpecial (): boolean {
    return this._isSpecial;
  }

  /**
   * Returns if the ship is premium
   * @returns isPremium: boolean
   */
  get isPremium (): boolean {
    return this._isPremium;
  }

  /**
   * Returns the ship id
   * @returns shipId: number
   */
  get shipId (): number {
    return this._shipId;
  }

  /**
   * Returns the ship default profile
   * @returns defaultProfile: WowsShipDefaultProfileApiResponse
   */
  get defaultProfile (): WowsShipDefaultProfileApiResponse {
    return this._defaultProfile;
  }

  /**
   * Returns the ship tier
   * @returns tier: number
   */
  get tier (): number {
    return this._tier;
  }

  /**
   * Returns the ship name
   * @returns name: string
   */
  get name (): string {
    return this._name;
  }

  /**
   * Returns the ship type
   * @returns type: string
   */
  get type (): string {
    return this._type;
  }
}
