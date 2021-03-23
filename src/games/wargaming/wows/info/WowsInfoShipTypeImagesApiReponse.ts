export default class WowsInfoShipTypeImagesApiReponse {
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
   * @param imagePremium
   * @param image
   * @param imageElite
   */
  constructor (
    imagePremium: string,
    image: string,
    imageElite: string
  ) {
    this._imagePremium = imagePremium
    this._image = image
    this._imageElite = imageElite
  }

  /**
   * Returns the premium ship image path
   * @returns imagePremium: string
   */
  get imagePremium (): string {
    return this._imagePremium
  }

  /**
   * Returns the ship image path
   * @returns image: string
   */
  get image (): string {
    return this._image
  }

  /**
   * Returns the elite ship image path
   * @returns imageElite: string
   */
  get imageElite (): string {
    return this._imageElite
  }
}
