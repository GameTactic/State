import { EntityOptions } from './types';
import Icon from '../icon/Icon';
import { CanvasElementName } from '../abstract';

/**
 * The entity class
 * An entity is an icon that exist within a team
 * @author Eirik Måseidvåg
 */
export default class Entity extends Icon {
  /**
   * The team the entity is in
   * Not all entities need to have a team
   * @public
   */
  public teamId: string

  /**
   * Return the name of the canvas element
   * @returns CanvasElementName
   */
  public name = CanvasElementName.ENTITY;

  /**
   * Construct the instance
   * @param options
   * @protected
   */
  constructor (options: EntityOptions) {
    super(options);
    this.teamId = options.teamId;
  }
}
