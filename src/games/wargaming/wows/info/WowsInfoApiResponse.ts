import WgDataApiResponse from '../../WgDataApiResponse';
import WowsInfoShipTypeImagesApiResponse from './WowsInfoShipTypeImagesApiResponse';
import { WowsInfoApiResponseOptions } from './types';

export default class WowsInfoApiResponse extends WgDataApiResponse {
  /**
   * List of ship types
   * @public
   */
  public readonly shipTypes: { [key: string]: string};

  /**
   * List of ship images by types
   * @public
   */
  public readonly shipTypeImages: { [key: string]: WowsInfoShipTypeImagesApiResponse }

  /**
   * Construct the Wows info Api response object
   * @param options
   */
  constructor (options: WowsInfoApiResponseOptions) {
    super();
    this.shipTypes = options.shipTypes;
    this.shipTypeImages = options.shipTypeImages;
  }
}
