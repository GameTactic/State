import WotTeamsPositions from '../positions/WotTeamsPositions';
import { WotStandardBattleOptions } from './types';
import { Serialize } from 'serialazy';
import SerializeHelper from '../../../../util/SerializeHelper';

@Serialize<WotStandardBattleOptions, WotStandardBattle>({
  down: ((wotStandardBattle: WotStandardBattle) => SerializeHelper.toDown(wotStandardBattle)),
  up: ((options: WotStandardBattleOptions) => new WotStandardBattle(options))
})
export default class WotStandardBattle {
  /**
   * Teams base(s) positions
   * @private
   */
  private _teamsBasePositions: WotTeamsPositions

  /**
   * Construct the standard battle positions
   * @param options
   */
  constructor (options: WotStandardBattleOptions) {
    this._teamsBasePositions = options.teamsBasePositions;
  }

  /**
   * Returns the teams base(s) positions
   * @returns teamsBasePositions: WotTeamsBasePositions
   */
  get teamsBasePositions (): WotTeamsPositions {
    return this._teamsBasePositions;
  }

  /**
   * Set the team base(s) positions
   * @param value
   */
  set teamsBasePositions (value: WotTeamsPositions) {
    this._teamsBasePositions = value;
  }
}
