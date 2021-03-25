import WotTeamsPositions from '../positions/WotTeamsPositions';
import { Point } from '../../../../util';
import { WotEncounterBattleOptions } from './types';
import { Serialize } from 'serialazy';
import SerializeHelper from '../../../../util/SerializeHelper';

@Serialize<WotEncounterBattleOptions, WotEncounterBattle>({
  down: ((wotEncounterBattle: WotEncounterBattle) => SerializeHelper.toDown(wotEncounterBattle)),
  up: ((options: WotEncounterBattleOptions) => new WotEncounterBattle(options))
})
export default class WotEncounterBattle {
  /**
   * Teams spawn(s) positions
   * @public
   */
  public teamsSpawnPositions: WotTeamsPositions

  /**
   * Map control point
   * @public
   */
  public controlPoint: Point

  /**
   * Construct the encounter battle positions
   * @param options
   */
  constructor (options: WotEncounterBattleOptions) {
    this.teamsSpawnPositions = options.teamsSpawnPositions;
    this.controlPoint = options.controlPoint;
  }
}
