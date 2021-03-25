import { WgMetaApiResponseOptions } from './types';

export default class WgMetaApiResponse {
  /**
   * Number of results
   * @public
   */
  public readonly count: number;

  /**
   * Total number of pages
   * @public
   */
  public readonly pageTotal: number;

  /**
   * Total number of results (same as count ?)
   * @public
   */
  public readonly total: number;

  /**
   * Limit number of results per page
   * @public
   */
  public readonly limit: number;

  /**
   * Active page number
   * @public
   */
  public readonly page: number;

  /**
   * Construct the Wargaming Api response meta object
   * @param options
   */
  constructor (options: WgMetaApiResponseOptions) {
    this.count = options.count;
    this.pageTotal = options.pageTotal;
    this.total = options.total;
    this.limit = options.limit;
    this.page = options.page;
  }
}
