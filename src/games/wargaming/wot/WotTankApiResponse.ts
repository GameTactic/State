import WgDataApiResponse from '../WgDataApiResponse';
import WotTankImageApiResponse from './WotTankImageApiResponse';
import { WotTankApiResponseOptions } from './types';

export default class WotTankApiResponse extends WgDataApiResponse {
  /**
   * Tank id
   * @public
   */
  public readonly tankId: number;

  /**
   * Tank type
   * @public
   */
  public readonly type: string;

  /**
   * Tank name
   * @public
   */
  public readonly name: string;

  /**
   * Tank images paths
   * @public
   */
  public readonly image: WotTankImageApiResponse;

  /**
   * Construct the Wot tank GameAssets response
   * @param options
   */
  constructor (options: WotTankApiResponseOptions) {
    super();
    this.tankId = options.tankId;
    this.type = options.type;
    this.name = options.name;
    this.image = options.image;
  }
}
