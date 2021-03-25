import WotStandardBattle from './gamemodes/WotStandardBattle';
import WotEncounterBattle from './gamemodes/WotEncounterBattle';
import WotAssaultBattle from './gamemodes/WotAssaultBattle';
import WotTeamBattle from './gamemodes/WotTeamBattle';
import { WotGameModesDataOptions } from './types';
import { Serialize } from 'serialazy';
import SerializeHelper from '../../../util/SerializeHelper';

@Serialize<WotGameModesDataOptions, WotGameModesData>({
  down: ((wotGameModesData: WotGameModesData) => SerializeHelper.toDown(wotGameModesData)),
  up: ((options: WotGameModesDataOptions) => new WotGameModesData(options))
})
export default class WotGameModesData {
  /**
   * Standard battle data
   * @public
   */
  public standardBattle: WotStandardBattle

  /**
   * Encounter battle data
   * @public
   */
  public encounterBattle: WotEncounterBattle

  /**
   * Assault battle data
   * @public
   */
  public assaultBattle: WotAssaultBattle

  /**
   * Team battle data
   * @public
   */
  public teamBattle: WotTeamBattle

  /**
   * Construct the WoT Game modes
   * @param options
   */
  constructor (options: WotGameModesDataOptions) {
    this.standardBattle = options.standardBattle;
    this.encounterBattle = options.encounterBattle;
    this.assaultBattle = options.assaultBattle;
    this.teamBattle = options.teamBattle;
  }
}
