import Api from '../abstract/Api';
import WgMetaApiResponse from './WgMetaApiResponse';
import WgDataApiResponse from './WgDataApiResponse';

export default class WgApiResponse extends Api {
  /**
   * The Wargaming Api response status
   * @private
   */
  private readonly _status: string;

  /**
   * The Wargaming Api response meta object
   * @private
   */
  private readonly _meta: WgMetaApiResponse

  private readonly _data: WgDataApiResponse

  /**
   * Construct the Wargaming Api response object
   * @param status
   * @param meta
   * @param data
   */
  protected constructor (
    status: string,
    meta: WgMetaApiResponse,
    data: WgDataApiResponse
  ) {
    super();
    this._status = status;
    this._meta = meta;
    this._data = data;
  }

  /**
   * Returns the Wargaming Api response status
   * @returns status: string
   */
  get status (): string {
    return this._status;
  }

  /**
   * Returns the Wargaming Api response meta object
   * @returns meta: WgMetaApiResponse
   */
  get meta (): WgMetaApiResponse {
    return this._meta;
  }

  /**
   * Returns the Wargaming Api response data object
   * @returns data: WgDataApiResponse
   */
  get data (): WgDataApiResponse {
    return this._data;
  }
}
