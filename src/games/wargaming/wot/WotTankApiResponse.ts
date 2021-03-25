import WgDataApiResponse from '../WgDataApiResponse';
import WotTankImageApiResponse from './WotTankImageApiResponse';
import { WotTankApiResponseOptions } from './types';

export default class WotTankApiResponse extends WgDataApiResponse {
  /**
   * Tank id
   * @private
   */
  private readonly _tankId: number;

  /**
   * Tank type
   * @private
   */
  private readonly _type: string;

  /**
   * Tank name
   * @private
   */
  private readonly _name: string;

  /**
   * Tank images paths
   * @private
   */
  private readonly _image: WotTankImageApiResponse;

  /**
   * Construct the Wot tank Api response
   * @param options
   */
  constructor (options: WotTankApiResponseOptions) {
    super();
    this._tankId = options.tankId;
    this._type = options.type;
    this._name = options.name;
    this._image = options.image;
  }

  /**
   * Returns the tank id
   * @returns tankId: number
   */
  get tankId (): number {
    return this._tankId;
  }

  /**
   * Returns the tank type
   * @returns type: string
   */
  get type (): string {
    return this._type;
  }

  /**
   * Returns the tank name
   * @returns name: string
   */
  get name (): string {
    return this._name;
  }

  /**
   * Returns the tank images paths
   * @returns image: WotTankImageApiResponse
   */
  get image (): WotTankImageApiResponse {
    return this._image;
  }
}
