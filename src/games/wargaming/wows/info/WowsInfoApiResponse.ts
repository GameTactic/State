import WgDataApiResponse from '../../WgDataApiResponse';
import WowsInfoShipTypeImagesApiResponse from './WowsInfoShipTypeImagesApiResponse';
import { WowsInfoApiResponseOptions } from './types';

export default class WowsInfoApiResponse extends WgDataApiResponse {
  /**
   * List of ship types
   * @private
   */
  private readonly _shipTypes: { [key: string]: string};

  /**
   * List of ship images by types
   * @private
   */
  private readonly _shipTypeImages: { [key: string]: WowsInfoShipTypeImagesApiResponse }

  /**
   * Construct the Wows info Api response object
   * @param options
   */
  constructor (options: WowsInfoApiResponseOptions) {
    super();
    this._shipTypes = options.shipTypes;
    this._shipTypeImages = options.shipTypeImages;
  }

  /**
   * Returns the list of ship types
   * @returns shipTypes: { [p: string]: string }
   */
  get shipTypes (): { [p: string]: string } {
    return this._shipTypes;
  }

  /**
   * Returns the list of ship images by types
   * @returns shipTypeImages: { [p: string]: WowsInfoShipTypeImagesApiResponse }
   */
  get shipTypeImages (): { [p: string]: WowsInfoShipTypeImagesApiResponse } {
    return this._shipTypeImages;
  }
}
