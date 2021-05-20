import { EntityOptions } from './types';
import Icon from './Icon';

/**
 * The entity class
 * @author Eirmas
 * @abstract
 */
export default abstract class Entity extends Icon {
  /**
   * The team the entity is in
   * Not all entities need to have a team
   * @public
   */
  public teamId: string

  /**
   * Construct the instance
   * @param options
   * @protected
   */
  protected constructor (options: EntityOptions) {
    super(options);
    this.teamId = options.teamId;
  }
}
