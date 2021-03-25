import { WowsInfoShipTypeImagesApiResponseOptions } from './types';

export default class WowsInfoShipTypeImagesApiResponse {
  /**
   * Premium ship image path
   * @public
   */
  public readonly imagePremium: string;

  /**
   * Ship image path
   * @public
   */
  public readonly image: string;

  /**
   * Elite ship image path
   * @public
   */
  public readonly imageElite: string;

  /**
   * Construct the Wows ship type images Api response object
   * @param options
   */
  constructor (options: WowsInfoShipTypeImagesApiResponseOptions) {
    this.imagePremium = options.imagePremium;
    this.image = options.image;
    this.imageElite = options.imageElite;
  }
}
