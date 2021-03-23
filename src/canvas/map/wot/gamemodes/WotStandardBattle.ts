import WotTeamsPositions from '../positions/WotTeamsPositions';

export default class WotStandardBattle {
  /**
   * Teams base(s) positions
   * @private
   */
  private _teamsBasePositions: WotTeamsPositions

  /**
   * Construct the standard battle positions
   * @param teamsBasePositions
   */
  constructor (teamsBasePositions: WotTeamsPositions) {
    this._teamsBasePositions = teamsBasePositions;
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
