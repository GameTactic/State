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
   * @private
   */
  private _teamsSpawnPositions: WotTeamsPositions

  /**
   * Map control point
   * @private
   */
  private _controlPoint: Point

  /**
   * Construct the encounter battle positions
   * @param options
   */
  constructor (options: WotEncounterBattleOptions) {
    this._teamsSpawnPositions = options.teamsSpawnPositions;
    this._controlPoint = options.controlPoint;
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
   * Returns the map control point
   * @returns controlPoint: Point
   */
  get controlPoint (): Point {
    return this._controlPoint;
  }

  /**
   * Set the team control point
   * @param value
   */
  set controlPoint (value: Point) {
    this._controlPoint = value;
  }
}
