import WotTeamsPositions from '../positions/WotTeamsPositions';
import { WotAssaultBattleOptions } from './types';

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
