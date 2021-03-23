/**
 * The user class
 * @author Eirmas
 */
import {UserOptions} from "./types";
import Role from "./Role";

export default class User {
  /**
   * The users unique ID from the JWT token
   * Represented as an UUID string
   * @private
   */
  private _jti: string

  /**
   * The users name
   * @private
   */
  private _name: string

  /**
   * The tactic the user is currently viewing
   * @private
   */
  private _onTacticId: string | undefined

  /**
   * The team the user currently has selected
   * @private
   */
  private _onTeamId: string | undefined

  /**
   * A boolean telling if the user is online or not
   * @private
   */
  private _isOnline: boolean

  /**
   * A timestamp of when the last time the user was online
   * @private
   */
  private _lastOnline: number

  /**
   * The users roles
   * @private
   */
  private _roles: Role[]

  /**
   * Construct the object
   * @param options: UserOptions
   */
  constructor (options: UserOptions) {
    this._jti = options.jti
    this._name = options.name
    this._onTacticId = options.onTacticId
    this._onTeamId = options.onTeamId
    this._isOnline = options.isOnline
    this._lastOnline = options.lastOnline
    this._roles = options.roles
  }

  /**
   * Returns the users roles
   * @returns roles: Role[]
   */
  get roles (): Role[] {
    return this._roles
  }

  /**
   * Sets the user roles
   * @param value: Role[]
   */
  set roles (value: Role[]) {
    this._roles = value
  }

  /**
   * Returns an ISO timestamp of the last time when the user was online
   * @returns lastOnline: number
   */
  get lastOnline (): number {
    return this._lastOnline
  }

  /**
   * Set the users last online timestamp
   * @param value: number
   */
  set lastOnline (value: number) {
    this._lastOnline = value
  }

  /**
   * Returns boolean telling if the user is online
   * @returns isOnline: boolean
   */
  get isOnline (): boolean {
    return this._isOnline
  }

  /**
   * Sets if the user is online
   * @param value: boolean
   */
  set isOnline (value: boolean) {
    this._isOnline = value
  }

  /**
   * Returns the ID of the team the user has currently selected
   * The ID is in UUID format
   * @returns onTeamId: string
   */
  get onTeamId (): string | undefined {
    return this._onTeamId
  }

  /**
   * Sets the users current team ID
   * The ID must be in UUID format
   * @param value: string
   */
  set onTeamId (value: string | undefined) {
    this._onTeamId = value
  }

  /**
   * Returns the ID of the tactic the user is viewing
   * The ID is in UUID format
   * @returns onTacticId: string
   */
  get onTacticId (): string | undefined {
    return this._onTacticId
  }

  /**
   * Sets the users current tactic ID
   * The ID must be in UUID format
   * @param value: string
   */
  set onTacticId (value: string | undefined) {
    this._onTacticId = value
  }

  /**
   * Returns the users name
   * @returns name: string
   */
  get name (): string {
    return this._name
  }

  /**
   * Sets the users name
   * @param value: string
   */
  set name (value: string) {
    this._name = value
  }

  /**
   * Returns the user JTI
   * @returns jti: string
   */
  get jti (): string {
    return this._jti
  }

  /**
   * Sets the users JTI
   * @param value: string
   */
  set jti (value: string) {
    this._jti = value
  }
}
