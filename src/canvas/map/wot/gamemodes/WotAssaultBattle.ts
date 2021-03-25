import WotTeamsPositions from '../positions/WotTeamsPositions';
import { Serialize } from 'serialazy';
import { WotAssaultBattleOptions } from './types';
import SerializeHelper from '../../../../util/SerializeHelper';

@Serialize<WotAssaultBattleOptions, WotAssaultBattle>({
  down: ((wotAssaultBattle: WotAssaultBattle) => SerializeHelper.toDown(wotAssaultBattle)),
  up: ((options: WotAssaultBattleOptions) => new WotAssaultBattle(options))
})
export default class WotAssaultBattle {
  /**
   * Teams spawn(s) positions
   * @public
   */
  public teamsSpawnPositions: WotTeamsPositions

  /**
   * Teams base(s) positions
   * @public
   */
  public teamsBasePositions: WotTeamsPositions

  /**
   * Construct the assault battle positions
   * @param options
   */
  constructor (options: WotAssaultBattleOptions) {
    this.teamsSpawnPositions = options.teamsSpawnPositions;
    this.teamsBasePositions = options.teamsBasePositions;
  }
}
