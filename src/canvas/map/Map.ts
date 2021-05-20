import { MapInterface } from './types';
import { Dimensions } from '../../util';
import { MapOptions } from './types';
import { MapVueComponent } from '../types';

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
   * The URL to the image of the map
   * Defined as object because of socket issues
   * @public
   */
  public url: string

  /**
   * The id of the user who initialized the map
   * @public
   */
  public readonly creatorId: string

  /**
   * A constant to fine tune the size of the map
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
    this.name = options.name;
    this.description = options.description;
    this.url = options.url;
    this.sizeConstant = options.sizeConstant || 1;
    this.creatorId = options.creatorId;
    this.dimensions = options.dimensions;
    this.tacticId = options.tacticId;
    this.mapVueComponent = MapVueComponent.DEFAULT;
  }
}
