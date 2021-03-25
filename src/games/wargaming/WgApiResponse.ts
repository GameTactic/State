import Api from '../abstract/Api';
import WgMetaApiResponse from './WgMetaApiResponse';
import WgDataApiResponse from './WgDataApiResponse';
import { WgApiResponseOptions } from './types';

export default class WgApiResponse extends Api {
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

  public readonly data: WgDataApiResponse

  /**
   * Construct the Wargaming Api response object
   * @param options
   */
  protected constructor (options: WgApiResponseOptions) {
    super();
    this.status = options.status;
    this.meta = options.meta;
    this.data = options.data;
  }
}
