import { MapVueComponent } from '../../types';
import Map from '../Map';

export default class WowsMaps extends Map {
  /**
   * Returns which vue component this map shall be rendered with
   * @returns MapVueComponent.WOWS
   */
  getVueComponent (): MapVueComponent {
    return MapVueComponent.WOWS;
  }
}
