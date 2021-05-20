import { v4 } from 'uuid';
import Entity from '../canvas/entity/Entity';
import { TeamOptions } from './types';

/**
 * The team class
 * @author Eirmas
 * @abstract
 */
export default abstract class Team {
  /**
   * The ID of the team. Represented by a UUIDv4 string
   * @public
   */
  public readonly id: string

  /**
   * The ID of the tactic that the team is associated with
   * @public
   */
  public tacticId: string

  /**
   * The name of the team
   * @public
   */
  public name: string

  /**
   * The color of the team
   * @public
   */
  public color: number

  /**
   * The team entities
   * @public
   */
  public entities: Entity[]

  /**
   * Construct the instance
   * @param options
   * @protected
   */
  protected constructor (options: TeamOptions) {
    this.id = options.id || v4();
    this.tacticId = options.tacticId;
    this.name = options.name;
    this.color = options.color;
    this.entities = options.entities || [];
  }
}
