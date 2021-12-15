/**
 * This class represents a sector line on the canvas
 * @author Eirik Måseidvåg
 */
import { CanvasElementName } from '..';
import { SectorOptions, defaultSectorOptions, SectorStrokeStyle } from './types';
import CanvasElement from '../abstract/CanvasElement';

export default class Sector extends CanvasElement {
  /**
   * The inner fill of the sector. Represented as a hexadecimal number
   * E.g. 0xffffff (white)
   * @public
   */
  public fill: number

  /**
   * The fill of the border of the sector. Represented as a hexadecimal number
   * E.g. 0xffffff (white)
   * @public
   */
  public borderFill: number

  /**
   * The size of the border
   * @public
   */
  public size: number

  /**
   * The style of the circles border
   * @public
   */
  public strokeStyle: SectorStrokeStyle

  /**
   * The opacity of the circles body. Represented by a float between 0 and 1
   * @public
   */
  public fillOpacity: number

  /**
   * The opacity of the circles border. Represented by a float between 0 and 1
   * @public
   */
  public borderOpacity: number

  /**
   * The points to draw the sector in order
   * @public
   */
  public points: Array<{ x: number; y: number }>

  /**
   * Returns the type of this canvas element
   * @returns CanvasElementName.SECTOR
   */
  public name = CanvasElementName.SECTOR

  /**
   * Construct the object
   * @param options: SectorOptions
   */
  constructor (options: SectorOptions) {
    super(options);
    const opt = Object.assign({}, defaultSectorOptions, options);
    this.strokeStyle = opt.strokeStyle;
    this.fill = opt.fill;
    this.borderFill = opt.borderFill;
    this.size = opt.size;
    this.strokeStyle = opt.strokeStyle;
    this.fillOpacity = opt.fillOpacity;
    this.borderOpacity = opt.borderOpacity;
    this.points = opt.points;
  }
}
