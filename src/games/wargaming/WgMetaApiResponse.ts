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
   * @param count
   * @param pageTotal
   * @param total
   * @param limit
   * @param page
   */
  constructor (
    count: number,
    pageTotal: number,
    total: number, limit:
      number, page: number
  ) {
    this._count = count
    this._pageTotal = pageTotal
    this._total = total
    this._limit = limit
    this._page = page
  }

  /**
   * Returns the number of results
   * @returns count: number
   */
  get count (): number {
    return this._count
  }

  /**
   * Returns the total number of pages
   * @returns pageTotal: number
   */
  get pageTotal (): number {
    return this._pageTotal
  }

  /**
   * Returns the total number of results
   * @returns total: number
   */
  get total (): number {
    return this._total
  }

  /**
   * Returns the limit number of results per page
   * @returns limit: number
   */
  get limit (): number {
    return this._limit
  }

  /**
   * Returns the active page number
   * @returns page: number
   */
  get page (): number {
    return this._page
  }
}
