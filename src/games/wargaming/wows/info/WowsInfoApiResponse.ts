import WgDataApiResponse from "../../WgDataApiResponse";
import WowsInfoShipTypeImagesApiReponse from "./WowsInfoShipTypeImagesApiReponse";

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
  private readonly _shipTypeImages: { [key: string]: WowsInfoShipTypeImagesApiReponse }

  /**
   * Construct the Wows info Api response object
   * @param shipTypes
   * @param shipTypeImages
   */
  constructor (
    shipTypes: { [p: string]: string },
    shipTypeImages: { [p: string]: WowsInfoShipTypeImagesApiReponse }
  ) {
    super()
    this._shipTypes = shipTypes
    this._shipTypeImages = shipTypeImages
  }

  /**
   * Returns the list of ship types
   * @returns shipTypes: { [p: string]: string }
   */
  get shipTypes (): { [p: string]: string } {
    return this._shipTypes
  }

  /**
   * Returns the list of ship images by types
   * @returns shipTypeImages: { [p: string]: WowsInfoShipTypeImagesApiReponse }
   */
  get shipTypeImages (): { [p: string]: WowsInfoShipTypeImagesApiReponse } {
    return this._shipTypeImages
  }
}
