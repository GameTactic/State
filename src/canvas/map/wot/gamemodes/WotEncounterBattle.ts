import WotTeamsPositions from '../positions/WotTeamsPositions';
import { Point } from '../../../../util';
import { WotEncounterBattleOptions } from './types';

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
