/**
 * The class for a user role
 * @author Eirmas
 */
import { RoleOptions, RoleType } from './types';
import { Serialize } from 'serialazy';
import SerializeHelper from '../util/SerializeHelper';

@Serialize<RoleOptions, Role>({
  down: ((role: Role) => SerializeHelper.toDown(role)),
  up: ((options: RoleOptions) => new Role(options))
})
export default class Role {
  /**
   * The users role
   * @public
   */
  public readonly roleType: RoleType
  /**
   * The id of the user who assigned the role
   * @public
   */
  public readonly assigneeId: string

  /**
   * Construct the role
   * @param options
   */
  constructor (options: RoleOptions) {
    this.roleType = options.roleType;
    this.assigneeId = options.assigneeId;
  }
}
