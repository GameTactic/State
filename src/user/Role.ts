/**
 * The class for a user role
 * @author Eirmas
 */
import { RoleOptions, RoleType } from './types';
import User from './User';

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
  private readonly _assignedBy: string

  /**
   * Construct the role
   * @param options
   */
  constructor (options: RoleOptions) {
    this._roleType = options.roleType;
    this._assignedBy = options.assignedBy;
  }

  /**
   * Returns the userId of who assigned the role
   * @returns assignedBy: string
   */
  get assignedBy (): string {
    return this._assignedBy;
  }

  /**
   * Returns the role type
   * @returns RoleType
   */
  get roleType (): RoleType {
    return this._roleType;
  }
}
