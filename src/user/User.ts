import { UserPermission, UserOptions } from './types';

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
   * The user's permission
   * @public
   */
  public permissions: Array<UserPermission>

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
   * Construct the object
   * @param options: UserOptions
   */
  constructor (options: UserOptions) {
    this.id = options.id;
    this.name = options.name;
    this.onTacticId = options.onTacticId;
    this.onViewId = options.onViewId;
    this.onTeamId = options.onTeamId;
    this.permissions = options.permissions;
  }
}
