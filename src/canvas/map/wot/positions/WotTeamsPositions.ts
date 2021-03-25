import { Point } from '../../../../util';
import { WotTeamsPositionsOptions } from './types';
import { Serialize } from 'serialazy';
import SerializeHelper from '../../../../util/SerializeHelper';

@Serialize<WotTeamsPositionsOptions, WotTeamsPositions>({
  down: ((wotTeamsPositions: WotTeamsPositions) => SerializeHelper.toDown(wotTeamsPositions)),
  up: ((options: WotTeamsPositionsOptions) => new WotTeamsPositions(options))
})
export default class WotTeamsPositions {
  /**
   * Team 1 position(s) coordinates
   * @private
   */
  private _team1: Point[]

  /**
   * Team 2 position(s) coordinates
   * @private
   */
  private _team2: Point[]

  /**
   * Construct the team position(s) coordinates
   * @param options
   */
  constructor (options: WotTeamsPositionsOptions) {
    this._team1 = options.team1;
    this._team2 = options.team2;
  }

  /**
   * Returns the team 1 position(s) coordinates
   * @returns team1: Point[]
   */
  get team1 (): Point[] {
    return this._team1;
  }

  /**
   * Set the team 1 position(s) coordinates
   * @param value
   */
  set team1 (value: Point[]) {
    this._team1 = value;
  }

  /**
   * Returns the team 2 position(s) coordinates
   * @returns team2: Point[]
   */
  get team2 (): Point[] {
    return this._team2;
  }

  /**
   * Set the team 2 position(s) coordinates
   * @param value
   */
  set team2 (value: Point[]) {
    this._team2 = value;
  }
}
