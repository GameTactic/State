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
   * @public
   */
  public readonly id: string

  /**
   * The team that the entity is related to
   * @public
   */
  public teamId: string

  /**
   * Construct the instance
   * @param options
   * @protected
   */
  protected constructor (options: EntityOptions) {
    this.id = options.id || v4();
    this.teamId = options.teamId;
  }
}
