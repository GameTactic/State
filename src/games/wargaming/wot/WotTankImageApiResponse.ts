import { WotTankImageApiResponseOptions } from './types';

export default class WotTankImageApiResponse {
  /**
   * Tank small icon path
   * @private
   */
  private readonly _smallIcon: string;

  /**
   * Tank profile icon path
   * @private
   */
  private readonly _contourIcon: string;

  /**
   * Tank big icon path
   * @private
   */
  private readonly _bigIcon: string;

  /**
   * Construct the Wot tank image Api response object
   * @param options
   */
  constructor (options: WotTankImageApiResponseOptions) {
    this._smallIcon = options.smallIcon;
    this._contourIcon = options.contourIcon;
    this._bigIcon = options.bigIcon;
  }

  /**
   * Returns the tank small icon path
   * @returns smallIcon: string
   */
  get smallIcon (): string {
    return this._smallIcon;
  }

  /**
   * Returns the tank profile icon path
   * @returns contourIcon: string
   */
  get contourIcon (): string {
    return this._contourIcon;
  }

  /**
   * Returns the tank big icon path
   * @returns bigIcon: string
   */
  get bigIcon (): string {
    return this._bigIcon;
  }
}
