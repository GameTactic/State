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
   * @public
   */
  public teamsBasePositions: WotTeamsPositions

  /**
   * Construct the standard battle positions
   * @param options
   */
  constructor (options: WotStandardBattleOptions) {
    this.teamsBasePositions = options.teamsBasePositions;
  }
}
