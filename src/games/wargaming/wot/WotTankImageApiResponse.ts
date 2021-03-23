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
   * @param smallIcon
   * @param contourIcon
   * @param bigIcon
   */
  constructor (
    smallIcon: string,
    contourIcon: string,
    bigIcon: string
  ) {
    this._smallIcon = smallIcon;
    this._contourIcon = contourIcon;
    this._bigIcon = bigIcon;
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
