/**
 * The user class
 * @author Eirmas
 */
import { UserOptions } from './types';
import Role from './Role';
import { Serialize } from 'serialazy';
import SerializeHelper from '../util/SerializeHelper';

@Serialize<UserOptions, User>({
  down: ((user: User) => SerializeHelper.toDown(user)),
  up: ((options: UserOptions) => new User(options))
})
export default class User {
  /**
   * The users unique ID from the JWT token
   * Represented as an UUID string
   * @public
   */
  public jti: string

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
    this.jti = options.jti;
    this.name = options.name;
    this.onTacticId = options.onTacticId;
    this.onTeamId = options.onTeamId;
    this.isOnline = options.isOnline;
    this.lastOnline = options.lastOnline;
    this.roles = options.roles;
  }
}
