/**
 * The user class
 * @author Eirmas
 */
import { UserOptions } from './types';
import Role from './Role';

export default class User {
  /**
   * The users unique ID from the JWT token
   * Represented as an ULID string
   * @public
   */
  public id: string

  /**
   * The users name
   * @public
   */
  public name: string

  /**
   * The tactic the user is currently viewing
   * @public
   */
  public onTacticId: string | undefined

  /**
   * The team the user currently has selected
   * @public
   */
  public onTeamId: string | undefined

  /**
   * A boolean telling if the user is online or not
   * @public
   */
  public isOnline: boolean

  /**
   * A timestamp of when the last time the user was online
   * @public
   */
  public lastOnline: number

  /**
   * The users roles
   * @public
   */
  public roles: Role[]

  /**
   * Construct the object
   * @param options: UserOptions
   */
  constructor (options: UserOptions) {
    this.id = options.id;
    this.name = options.name;
    this.onTacticId = options.onTacticId;
    this.onTeamId = options.onTeamId;
    this.isOnline = options.isOnline;
    this.lastOnline = options.lastOnline;
    this.roles = options.roles;
  }
}
