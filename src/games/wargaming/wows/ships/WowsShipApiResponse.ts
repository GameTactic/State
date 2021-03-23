import WgDataApiResponse from '../../WgDataApiResponse';
import WowsShipDefaultProfileApiResponse from './WowsShipDefaultProfileApiResponse';

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
   * @param isSpecial
   * @param isPremium
   * @param shipId
   * @param defaultProfile
   * @param tier
   * @param name
   * @param type
   */
  constructor (
    isSpecial: boolean,
    isPremium: boolean,
    shipId: number,
    defaultProfile: WowsShipDefaultProfileApiResponse,
    tier: number,
    name: string,
    type: string
  ) {
    super();
    this._isSpecial = isSpecial;
    this._isPremium = isPremium;
    this._shipId = shipId;
    this._defaultProfile = defaultProfile;
    this._tier = tier;
    this._name = name;
    this._type = type;
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
