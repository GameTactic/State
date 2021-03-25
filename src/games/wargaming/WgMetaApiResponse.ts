import { WgMetaApiResponseOptions } from './types';

export default class WgMetaApiResponse {
  /**
   * Number of results
   * @private
   */
  private readonly _count: number;

  /**
   * Total number of pages
   * @private
   */
  private readonly _pageTotal: number;

  /**
   * Total number of results (same as _count ?)
   * @private
   */
  private readonly _total: number;

  /**
   * Limit number of results per page
   * @private
   */
  private readonly _limit: number;

  /**
   * Active page number
   * @private
   */
  private readonly _page: number;

  /**
   * Construct the Wargaming Api response meta object
   * @param options
   */
  constructor (options: WgMetaApiResponseOptions) {
    this._count = options.count;
    this._pageTotal = options.pageTotal;
    this._total = options.total;
    this._limit = options.limit;
    this._page = options.page;
  }

  /**
   * Returns the number of results
   * @returns count: number
   */
  get count (): number {
    return this._count;
  }

  /**
   * Returns the total number of pages
   * @returns pageTotal: number
   */
  get pageTotal (): number {
    return this._pageTotal;
  }

  /**
   * Returns the total number of results
   * @returns total: number
   */
  get total (): number {
    return this._total;
  }

  /**
   * Returns the limit number of results per page
   * @returns limit: number
   */
  get limit (): number {
    return this._limit;
  }

  /**
   * Returns the active page number
   * @returns page: number
   */
  get page (): number {
    return this._page;
  }
}
