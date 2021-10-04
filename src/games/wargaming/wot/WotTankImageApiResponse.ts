import { WotTankImageApiResponseOptions } from './types';

export default class WotTankImageApiResponse {
  /**
   * Tank small icon path
   * @public
   */
  public readonly smallIcon: string;

  /**
   * Tank profile icon path
   * @public
   */
  public readonly contourIcon: string;

  /**
   * Tank big icon path
   * @public
   */
  public readonly bigIcon: string;

  /**
   * Construct the Wot tank image GameAssets response object
   * @param options
   */
  constructor (options: WotTankImageApiResponseOptions) {
    this.smallIcon = options.smallIcon;
    this.contourIcon = options.contourIcon;
    this.bigIcon = options.bigIcon;
  }
}
