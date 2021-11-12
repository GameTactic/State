import { UserOptions } from './types';
import Role from './Role';

/**
 * The user class
 * @author Eirik Måseidvåg
 */
export default class User {
  /**
   * The users unique ID
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
   * The view the user is currently viewing
   */
  public onViewId: string | undefined

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
  public lastOnline: Date

  /**
   * The users role
   * @public
   */
  public role: Role

  /**
   * Construct the object
   * @param options: UserOptions
   */
  constructor (options: UserOptions) {
    this.id = options.id;
    this.name = options.name;
    this.onTacticId = options.onTacticId;
    this.onViewId = options.onViewId;
    this.onTeamId = options.onTeamId;
    this.isOnline = options.isOnline;
    this.lastOnline = options.lastOnline;
    this.role = options.role;
  }
}
