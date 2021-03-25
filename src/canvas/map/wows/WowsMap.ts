import { MapVueComponent } from '../../types';
import Map from '../Map';
import { WowsMapOptions } from './types';
import { MapInterface } from '../types';

export default class WowsMap extends Map implements MapInterface {

  /**
   * Returns which vue component this map shall be rendered with
   * @returns MapVueComponent.WOWS
   */
  public mapVueComponent: MapVueComponent

  constructor(options: WowsMapOptions) {
    super(options);
    this.mapVueComponent = MapVueComponent.WOWS;
  }
}
