import { MapInterface, MapVueComponent } from '../types';
import { Texture } from 'pixi.js';
import { Dimensions, Point } from '../../util';
import User from '../../user/User';
import Tactic from '../../tactic/Tactic';
import { defaultMapOptions, MapOptions } from './types';

export default class Map implements MapInterface {
  /**
   * The name of the map
   * @private
   */
  private _name: string

  /**
   * Description of the map
   * @private
   */
  private _description: string

  /**
   * A PIXI Texture of the map
   * @private
   */
  private _texture: Texture

  /**
   * The ratio of the map.
   * E.g. x: 1, y: 1 if the map is square.
   * @private
   */
  private _ratio: Point

  /**
   * The user who initialized the map
   * @private
   */
  private readonly _creator: User

  /**
   * A constant to regulate the size of different properties of tools
   * @private
   */
  private _sizeConstant: number

  /**
   * The map dimensions
   * @private
   */
  private _dimensions: Dimensions

  /**
   * The tactic the map relates to
   * @private
   */
  private _tactic: Tactic

  /**
   * Construct the map
   * @param options: MapOptions
   */
  constructor (options: MapOptions) {
    const finalOptions: Required<MapOptions> = Object.assign({}, defaultMapOptions, options)
    this._name = finalOptions.name
    this._description = finalOptions.description
    this._texture = finalOptions.texture
    this._ratio = finalOptions.ratio
    this._sizeConstant = finalOptions.sizeConstant
    this._creator = finalOptions.creator
    this._dimensions = finalOptions.dimension
    this._tactic = finalOptions.tactic
  }

  /**
   * Returns which vue component this map shall be rendered with
   * @returns MapVueComponent.DEFAULT
   */
  getVueComponent (): MapVueComponent {
    return MapVueComponent.DEFAULT
  }

  /**
   * Returns the name of the map
   * @returns name: string
   */
  get name (): string {
    return this._name
  }

  /**
   * Sets the name of the map
   * @param value: string
   */
  set name (value: string) {
    this._name = value
  }

  /**
   * Returns the description of the map
   * @returns description: string
   */
  get description (): string {
    return this._description
  }

  /**
   * Sets the description of the map
   * @param value: string
   */
  set description (value: string) {
    this._description = value
  }

  /**
   * Returns the PIXI texture of the map
   * @returns texture: PIXI.Texture
   */
  get texture (): PIXI.Texture {
    return this._texture
  }

  /**
   * Sets the texture for the map
   * @param value: PIXI.Texture
   */
  set texture (value: PIXI.Texture) {
    this._texture = value
  }

  /**
   * Returns the maps ratio
   * @returns ratio: Point
   */
  get ratio (): Point {
    return this._ratio
  }

  /**
   * Sets the maps ratio
   * @param value: Point
   */
  set ratio (value: Point) {
    if (value.x <= 0 || value.x > 1) {
      throw new Error(`[Map error]: Invalid X ratio '${value.x}'. (0 < x >= 1)`)
    }
    if (value.y <= 0 || value.y > 1) {
      throw new Error(`[Map error]: Invalid X ratio '${value.y}'. (0 < x >= 1)`)
    }
    this._ratio = value
  }

  /**
   * Returns the user who initialized the map
   * @returns creator: User
   */
  get creator (): User {
    return this._creator
  }

  /**
   * Returns a number to help tools sizing properties e.g. border width
   * @returns sizeConstant: number
   */
  get sizeConstant (): number {
    return this._sizeConstant
  }

  /**
   * Sets the size constant
   * @param value
   */
  set sizeConstant (value: number) {
    this._sizeConstant = value
  }

  /**
   * Returns the map dimensions
   * @return dimensions: Dimensions
   */
  get dimensions (): Dimensions {
    return this._dimensions
  }

  /**
   * Sets the map dimensions
   * @param value
   */
  set dimensions (value: Dimensions) {
    this._dimensions = value
  }

  /**
   * Returns the tactic the map relates to
   * @returns tactic: Tactic
   */
  get tactic (): Tactic {
    return this._tactic
  }

  /**
   * Sets the tactic the map relates to
   * @param value: Tactic
   */
  set tactic (value: Tactic) {
    this._tactic = value
  }
}
