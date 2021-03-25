import WotGameModesData from './WotGameModesData';
import { WotMapOptions } from './types';
import { MapVueComponent } from '../../types';
import Map from '../Map';
import { MapInterface } from '../types';

export default class WotMap extends Map implements MapInterface {
  /**
   * Game modes for a WoT map
   * @public
   */
  public gameModes: WotGameModesData

  /**
   * Returns which vue component this map shall be rendered with
   * @returns MapVueComponent.WOT
   */
  public mapVueComponent: MapVueComponent

  /**
   * Construct the WoT map
   * @param options
   */
  constructor (options: WotMapOptions) {
    super(options);
    this.gameModes = options.gameModes;
    this.mapVueComponent = MapVueComponent.WOT;
  }
}
