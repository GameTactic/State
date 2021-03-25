import { MapInterface } from './types';
import { Dimensions, Point } from '../../util';
import { defaultMapOptions, MapOptions } from './types';
import { Serialize } from 'serialazy';
import SerializeHelper from '../../util/SerializeHelper';
import {MapVueComponent} from "../types";

@Serialize<MapOptions, Map>({
  down: ((map: Map) => SerializeHelper.toDown(map)),
  up: ((options: MapOptions) => new Map(options))
})
export default class Map implements MapInterface {
  /**
   * The name of the map
   * @public
   */
  public name: string

  /**
   * Description of the map
   * @public
   */
  public description: string

  /**
   * A PIXI Texture of the map
   * Defined as object because of socket issues
   * @public
   */
  public texture: Object

  /**
   * The ratio of the map.
   * E.g. x: 1, y: 1 if the map is square.
   * @public
   */
  public ratio: Point

  /**
   * The id of the user who initialized the map
   * @public
   */
  public readonly creatorId: string

  /**
   * A constant to regulate the size of different properties of tools
   * @public
   */
  public sizeConstant: number

  /**
   * The map dimensions
   * @public
   */
  public dimensions: Dimensions

  /**
   * The ID of the tactic the map relates to
   * @public
   */
  public tacticId: string


  /**
   * Returns which vue component this map shall be rendered with
   * @returns MapVueComponent.DEFAULT
   */
  public mapVueComponent: MapVueComponent

  /**
   * Construct the map
   * @param options: MapOptions
   */
  constructor (options: MapOptions) {
    const finalOptions: Required<MapOptions> = Object.assign({}, defaultMapOptions, options);
    this.name = finalOptions.name;
    this.description = finalOptions.description;
    this.texture = finalOptions.texture;
    this.ratio = finalOptions.ratio;
    this.sizeConstant = finalOptions.sizeConstant;
    this.creatorId = finalOptions.creator;
    this.dimensions = finalOptions.dimensions;
    this.tacticId = finalOptions.tactic;
    this.mapVueComponent = MapVueComponent.DEFAULT
  }
}
