import { v4 } from 'uuid'
import Team from "../Team";
import {EntityOptions} from "./types";

/**
 * The entity class
 * @author Eirmas
 * @abstract
 */
export default abstract class Entity {
  /**
   * The ID of the entity.
   * @private
   */
  private _id: string

  /**
   * The team that the entity is related to
   * @private
   */
  private _team: Team

  /**
   * Construct the instance
   * @param options
   * @protected
   */
  protected constructor (options: EntityOptions) {
    this._id = v4()
    this._team = options.team
  }

  /**
   * Return the ID of the entity
   * Represented as an UUID string
   * @returns id: string
   */
  get id (): string {
    return this._id
  }

  /**
   * Return the team that the entity is related to
   * @returns: team: Team
   */
  get team (): Team {
    return this._team
  }

  /**
   * Set the team that the entity is related to
   * @param value: Team
   */
  set team (value: Team) {
    this._team = value
  }
}
