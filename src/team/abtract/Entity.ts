import { v4 } from 'uuid';
import { EntityOptions } from './types';

/**
 * The entity class.
 * An entity exists in a team and represent an asset to that team.
 * It can have an Icon associated with it, but its not required.
 * @author Eirmas
 * @abstract
 */
export default abstract class Entity {
  /**
   * The ID of the entity.
   * @private
   */
  private readonly _id: string

  /**
   * The team that the entity is related to
   * @private
   */
  private _teamId: string

  /**
   * Construct the instance
   * @param options
   * @protected
   */
  protected constructor (options: EntityOptions) {
    this._id = options.id || v4();
    this._teamId = options.teamId;
  }

  /**
   * Return the ID of the entity
   * Represented as an UUID string
   * @returns id: string
   */
  get id (): string {
    return this._id;
  }

  /**
   * Return the team that the entity is related to
   * @returns: team: string
   */
  get teamId (): string {
    return this._teamId;
  }

  /**
   * Set the team that the entity is related to
   * @param value: string
   */
  set teamId (value: string) {
    this._teamId = value;
  }
}
