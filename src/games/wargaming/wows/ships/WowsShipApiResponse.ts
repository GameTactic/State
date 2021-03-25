import WgDataApiResponse from '../../WgDataApiResponse';
import WowsShipDefaultProfileApiResponse from './WowsShipDefaultProfileApiResponse';
import { WowsShipApiResponseOptions } from './types';

export default class WowsShipApiResponse extends WgDataApiResponse {
  /**
   * Is the ship special ?
   * @public
   */
  public readonly isSpecial: boolean;

  /**
   * Is the ship premium ?
   * @public
   */
  public readonly isPremium: boolean;

  /**
   * Ship id
   * @public
   */
  public readonly shipId: number;

  /**
   * Ship default profile
   * @public
   */
  public readonly defaultProfile: WowsShipDefaultProfileApiResponse;

  /**
   * Ship tier
   * @public
   */
  public readonly tier: number;

  /**
   * Ship name
   * @public
   */
  public readonly name: string;

  /**
   * Ship type
   * @public
   */
  public readonly type: string;

  /**
   * Construct the Wows ship Api response
   * @param options
   */
  constructor (options: WowsShipApiResponseOptions) {
    super();
    this.isSpecial = options.isSpecial;
    this.isPremium = options.isPremium;
    this.shipId = options.shipId;
    this.defaultProfile = options.defaultProfile;
    this.tier = options.tier;
    this.name = options.name;
    this.type = options.type;
  }
}
