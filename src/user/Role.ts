/**
 * The class for a user role
 * @author Eirmas
 */
import {RoleOptions, RoleType} from "./types";
import User from "./User";

export default class Role {
  /**
   * The users role
   * @private
   */
  private readonly _roleType: RoleType
  /**
   * The user who assigned the role
   * @private
   */
  private readonly _assignedBy: User

  /**
   * Construct the role
   * @param options
   */
  constructor (options: RoleOptions) {
    this._roleType = options.roleType
    this._assignedBy = options.assignedBy
  }

  /**
   * Returns the user who assigned the role
   * @returns User
   */
  get assignedBy (): User {
    return this._assignedBy
  }

  /**
   * Returns the role type
   * @returns RoleType
   */
  get roleType (): RoleType {
    return this._roleType
  }
}
