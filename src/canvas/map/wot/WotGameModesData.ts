import WotStandardBattle from './gamemodes/WotStandardBattle';
import WotEncounterBattle from './gamemodes/WotEncounterBattle';
import WotAssaultBattle from './gamemodes/WotAssaultBattle';
import WotTeamBattle from './gamemodes/WotTeamBattle';

export default class WotGameModesData {
  /**
   * Standard battle data
   * @private
   */
  private _standardBattle: WotStandardBattle

  /**
   * Encounter battle data
   * @private
   */
  private _encounterBattle: WotEncounterBattle

  /**
   * Assault battle data
   * @private
   */
  private _assaultBattle: WotAssaultBattle

  /**
   * Team battle data
   * @private
   */
  private _teamBattle: WotTeamBattle

  /**
   * Construct the WoT Game modes
   * @param standardBattle
   * @param encounterBattle
   * @param assaultBattle
   * @param teamBattle
   */
  constructor (
    standardBattle: WotStandardBattle,
    encounterBattle: WotEncounterBattle,
    assaultBattle: WotAssaultBattle,
    teamBattle: WotTeamBattle
  ) {
    this._standardBattle = standardBattle;
    this._encounterBattle = encounterBattle;
    this._assaultBattle = assaultBattle;
    this._teamBattle = teamBattle;
  }

  /**
   * Returns standard battle data
   * @returns standardBattle: WotStandardBattle
   */
  get standardBattle (): WotStandardBattle {
    return this._standardBattle;
  }

  /**
   * Set the standard battle data
   * @param value
   */
  set standardBattle (value: WotStandardBattle) {
    this._standardBattle = value;
  }

  /**
   * Returns encounter battle data
   * @returns encounterBattle: WotEncounterBattle
   */
  get encounterBattle (): WotEncounterBattle {
    return this._encounterBattle;
  }

  /**
   * Set the encounter battle data
   * @param value
   */
  set encounterBattle (value: WotEncounterBattle) {
    this._encounterBattle = value;
  }

  /**
   * Returns assault battle data
   * @returns assaultBattle: WotAssaultBattle
   */
  get assaultBattle (): WotAssaultBattle {
    return this._assaultBattle;
  }

  /**
   * Set the assault battle data
   * @param value
   */
  set assaultBattle (value: WotAssaultBattle) {
    this._assaultBattle = value;
  }

  /**
   * Returns team battle data
   * @returns teamBattle: WotTeamBattle
   */
  get teamBattle (): WotTeamBattle {
    return this._teamBattle;
  }

  /**
   * Set the team battle data
   * @param value
   */
  set teamBattle (value: WotTeamBattle) {
    this._teamBattle = value;
  }
}
