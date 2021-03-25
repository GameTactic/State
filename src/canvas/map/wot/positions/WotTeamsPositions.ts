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
   * @public
   */
  public team1: Point[]

  /**
   * Team 2 position(s) coordinates
   * @public
   */
  public team2: Point[]

  /**
   * Construct the team position(s) coordinates
   * @param options
   */
  constructor (options: WotTeamsPositionsOptions) {
    this.team1 = options.team1;
    this.team2 = options.team2;
  }
}
