import { v4 } from 'uuid'
import Tactic from "../tactic/Tactic";
import Entity from "./abtract/Entity";
import {TeamOptions} from "./types";

/**
 * The team class
 * @author Eirmas
 * @abstract
 */
export default abstract class Team {
  /**
   * The ID of the team. Represented by a UUIDv4 string
   * @private
   */
  private readonly _id: string

  /**
   * The tactic that the team is associated with
   * @private
   */
  private _tactic: Tactic

  /**
   * The name of the team
   * @private
   */
  private _name: string

  /**
   * The color of the team
   * @private
   */
  private _color: number

  /**
   * The team entities
   * @private
   */
  private _entities: Entity[]

  /**
   * Construct the instance
   * @param options
   * @protected
   */
  protected constructor (options: TeamOptions) {
    this._id = options.id || v4()
    this._tactic = options.tactic
    this._name = options.name
    this._color = options.color
    this._entities = options.entities || []
  }

  /**
   * Returns the ID of the team as an UUIDv4 string
   * @returns id: string
   */
  get id (): string {
    return this._id
  }

  /**
   * Returns the tactic that the team is related to
   * @returns tactic: Tactic
   */
  get tactic (): Tactic {
    return this._tactic
  }

  /**
   * Sets the tactic that the team is related to
   * @param value: Tactic
   */
  set tactic (value: Tactic) {
    this._tactic = value
  }

  /**
   * Returns the name of the team
   * @returns name: string
   */
  get name (): string {
    return this._name
  }

  /**
   * Sets the name of the team
   * @param value: string
   */
  set name (value: string) {
    this._name = value
  }

  /**
   * Returns the color of the team represented as a hexadecimal number
   * @returns color: number
   */
  get color (): number {
    return this._color
  }

  /**
   * Sets the color of the team
   * @param value: number
   */
  set color (value: number) {
    this._color = value
  }

  /**
   * Returns the teams entities
   * @returns entities: Entity[]
   */
  get entities (): Entity[] {
    return this._entities
  }

  /**
   * Sets the teams entities
   * @param value: Entity[]
   */
  set entities (value: Entity[]) {
    this._entities = value
  }
}
