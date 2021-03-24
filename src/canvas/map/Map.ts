import { MapInterface, MapVueComponent } from '../types';
import { Dimensions, Point } from '../../util';
import { defaultMapOptions, MapOptions } from './types';
import {Serialize} from "serialazy";

@Serialize<MapOptions, Map>({
  down: ((map: Map) => ({
    name: map.name,
    description: map.description,
    texture: map.texture,
    ratio: map.ratio,
    creatorId: map.creatorId,
    sizeConstant: map.sizeConstant,
    dimensions: map.dimensions,
    tacticId: map.tacticId
  })),
  up: ((options: MapOptions) => new Map(options))
})
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
   * Defined as object because of socket issues
   * @private
   */
  private _texture: Object

  /**
   * The ratio of the map.
   * E.g. x: 1, y: 1 if the map is square.
   * @private
   */
  private _ratio: Point

  /**
   * The id of the user who initialized the map
   * @private
   */
  private readonly _creatorId: string

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
   * The ID of the tactic the map relates to
   * @private
   */
  private _tacticId: string

  /**
   * Construct the map
   * @param options: MapOptions
   */
  constructor (options: MapOptions) {
    const finalOptions: Required<MapOptions> = Object.assign({}, defaultMapOptions, options);
    this._name = finalOptions.name;
    this._description = finalOptions.description;
    this._texture = finalOptions.texture;
    this._ratio = finalOptions.ratio;
    this._sizeConstant = finalOptions.sizeConstant;
    this._creatorId = finalOptions.creator;
    this._dimensions = finalOptions.dimensions;
    this._tacticId = finalOptions.tactic;
  }

  /**
   * Returns which vue component this map shall be rendered with
   * @returns MapVueComponent.DEFAULT
   */
  getVueComponent (): MapVueComponent {
    return MapVueComponent.DEFAULT;
  }

  /**
   * Returns the name of the map
   * @returns name: string
   */
  get name (): string {
    return this._name;
  }

  /**
   * Sets the name of the map
   * @param value: string
   */
  set name (value: string) {
    this._name = value;
  }

  /**
   * Returns the description of the map
   * @returns description: string
   */
  get description (): string {
    return this._description;
  }

  /**
   * Sets the description of the map
   * @param value: string
   */
  set description (value: string) {
    this._description = value;
  }

  /**
   * Returns the PIXI texture of the map
   * @returns texture: PIXI.Texture
   */
  get texture (): Object {
    return this._texture;
  }

  /**
   * Sets the texture for the map
   * @param value: PIXI.Texture
   */
  set texture (value: Object) {
    this._texture = value;
  }

  /**
   * Returns the maps ratio
   * @returns ratio: Point
   */
  get ratio (): Point {
    return this._ratio;
  }

  /**
   * Sets the maps ratio
   * @param value: Point
   */
  set ratio (value: Point) {
    if (value.x <= 0 || value.x > 1) {
      throw new Error(`[Map error]: Invalid X ratio '${value.x}'. (0 < x >= 1)`);
    }
    if (value.y <= 0 || value.y > 1) {
      throw new Error(`[Map error]: Invalid X ratio '${value.y}'. (0 < x >= 1)`);
    }
    this._ratio = value;
  }

  /**
   * Returns the user who initialized the map
   * @returns creator: string
   */
  get creatorId (): string {
    return this._creatorId;
  }

  /**
   * Returns a number to help tools sizing properties e.g. border width
   * @returns sizeConstant: number
   */
  get sizeConstant (): number {
    return this._sizeConstant;
  }

  /**
   * Sets the size constant
   * @param value
   */
  set sizeConstant (value: number) {
    this._sizeConstant = value;
  }

  /**
   * Returns the map dimensions
   * @return dimensions: Dimensions
   */
  get dimensions (): Dimensions {
    return this._dimensions;
  }

  /**
   * Sets the map dimensions
   * @param value
   */
  set dimensions (value: Dimensions) {
    this._dimensions = value;
  }

  /**
   * Returns the ID of the tactic the map relates to
   * @returns tactic: string
   */
  get tacticId (): string {
    return this._tacticId;
  }

  /**
   * Sets the ID of the tactic the map relates to
   * @param value: string
   */
  set tacticId (value: string) {
    this._tacticId = value;
  }
}
