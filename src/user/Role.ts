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
   * @private
   */
  private readonly _roleType: RoleType
  /**
   * The id of the user who assigned the role
   * @private
   */
  private readonly _assigneeId: string

  /**
   * Construct the role
   * @param options
   */
  constructor (options: RoleOptions) {
    this._roleType = options.roleType;
    this._assigneeId = options.assigneeId;
  }

  /**
   * Returns the userId of who assigned the role
   * @returns assignedBy: string
   */
  get assigneeId (): string {
    return this._assigneeId;
  }

  /**
   * Returns the role type
   * @returns RoleType
   */
  get roleType (): RoleType {
    return this._roleType;
  }
}
