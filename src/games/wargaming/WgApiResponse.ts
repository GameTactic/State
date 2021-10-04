import WgMetaApiResponse from './WgMetaApiResponse';
import WgDataApiResponse from './WgDataApiResponse';
import { WgApiResponseOptions } from './types';

export default class WgApiResponse {
  /**
   * The Wargaming GameAssets response status
   * @public
   */
  public readonly status: string;

  /**
   * The Wargaming GameAssets response meta object
   * @public
   */
  public readonly meta: WgMetaApiResponse

  /**
   * The Wargaming GameAssets data object
   * @public
   */
  public readonly data: WgDataApiResponse

  /**
   * Construct the Wargaming GameAssets response object
   * @param options
   */
  protected constructor (options: WgApiResponseOptions) {
    this.status = options.status;
    this.meta = options.meta;
    this.data = options.data;
  }
}
