import { WowsInfoShipTypeImagesApiResponseOptions } from './types';

export default class WowsInfoShipTypeImagesApiResponse {
  /**
   * Premium ship image path
   * @private
   */
  private readonly _imagePremium: string;

  /**
   * Ship image path
   * @private
   */
  private readonly _image: string;

  /**
   * Elite ship image path
   * @private
   */
  private readonly _imageElite: string;

  /**
   * Construct the Wows ship type images Api response object
   * @param options
   */
  constructor (options: WowsInfoShipTypeImagesApiResponseOptions) {
    this._imagePremium = options.imagePremium;
    this._image = options.image;
    this._imageElite = options.imageElite;
  }

  /**
   * Returns the premium ship image path
   * @returns imagePremium: string
   */
  get imagePremium (): string {
    return this._imagePremium;
  }

  /**
   * Returns the ship image path
   * @returns image: string
   */
  get image (): string {
    return this._image;
  }

  /**
   * Returns the elite ship image path
   * @returns imageElite: string
   */
  get imageElite (): string {
    return this._imageElite;
  }
}
