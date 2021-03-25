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
   * @private
   */
  private _teamsSpawnPositions: WotTeamsPositions

  /**
   * Teams base(s) positions
   * @private
   */
  private _teamsBasePositions: WotTeamsPositions

  /**
   * Construct the assault battle positions
   * @param options
   */
  constructor (options: WotAssaultBattleOptions) {
    this._teamsSpawnPositions = options.teamsSpawnPositions;
    this._teamsBasePositions = options.teamsBasePositions;
  }

  /**
   * Returns the teams spawn(s) positions
   * @returns teamsSpawnPositions: WotTeamsSpawnPositions
   */
  get teamsSpawnPositions (): WotTeamsPositions {
    return this._teamsSpawnPositions;
  }

  /**
   * Set the team spawn(s) positions
   * @param value
   */
  set teamsSpawnPositions (value: WotTeamsPositions) {
    this._teamsSpawnPositions = value;
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
