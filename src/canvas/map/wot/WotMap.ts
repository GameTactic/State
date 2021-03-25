import WotGameModesData from './WotGameModesData';
import { WotMapOptions } from './types';
import { MapVueComponent } from '../../types';
import Map from '../Map';
import { Serialize } from 'serialazy';
import SerializeHelper from '../../../util/SerializeHelper';

@Serialize<WotMapOptions, Map>({
  down: ((wotMap: WotMap) => SerializeHelper.toDown(wotMap)),
  up: ((options: WotMapOptions) => new WotMap(options))
})
export default class WotMap extends Map {
  /**
   * Game modes for a WoT map
   * @private
   */
  private _gameModes: WotGameModesData

  /**
   * Construct the WoT map
   * @param options
   */
  constructor (options: WotMapOptions) {
    super(options);
    this._gameModes = options.gameModes;
  }

  /**
   * Returns which vue component this map shall be rendered with
   * @returns MapVueComponent.WOT
   */
  getVueComponent (): MapVueComponent {
    return MapVueComponent.WOT;
  }

  /**
   * Returns game modes for the WoT map
   * @returns gameModes: WotGameModesData
   */
  get gameModes (): WotGameModesData {
    return this._gameModes;
  }

  /**
   * Set the game modes for the WoT map
   * @param value
   */
  set gameModes (value: WotGameModesData) {
    this._gameModes = value;
  }
}
