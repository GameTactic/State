import WotTeamsPositions from '../positions/WotTeamsPositions';
import { WotStandardBattleOptions } from './types';

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
