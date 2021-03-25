import { MapVueComponent } from '../../types';
import Map from '../Map';
import { Serialize } from 'serialazy';
import { WowsMapOptions } from './types';
import SerializeHelper from '../../../util/SerializeHelper';

@Serialize<WowsMapOptions, WowsMap>({
  down: ((map: WowsMap) => SerializeHelper.toDown(map)),
  up: ((options: WowsMapOptions) => new WowsMap(options))
})
export default class WowsMap extends Map {

  constructor(options: WowsMapOptions) {
    super(options);
  }

  /**
   * Returns which vue component this map shall be rendered with
   * @returns MapVueComponent.WOWS
   */
  getVueComponent (): MapVueComponent {
    return MapVueComponent.WOWS;
  }
}
