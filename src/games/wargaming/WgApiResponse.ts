import WgMetaApiResponse from './WgMetaApiResponse';
import WgDataApiResponse from './WgDataApiResponse';
import { WgApiResponseOptions } from './types';

export default class WgApiResponse {
  /**
   * The Wargaming Api response status
   * @public
   */
  public readonly status: string;

  /**
   * The Wargaming Api response meta object
   * @public
   */
  public readonly meta: WgMetaApiResponse

  /**
   * The Wargaming Api data object
   * @public
   */
  public readonly data: WgDataApiResponse

  /**
   * Construct the Wargaming Api response object
   * @param options
   */
  protected constructor (options: WgApiResponseOptions) {
    this.status = options.status;
    this.meta = options.meta;
    this.data = options.data;
  }
}
