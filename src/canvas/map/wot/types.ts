import { MapOptions } from '../types';
import WotGameModesData from './WotGameModesData';

export interface WotMapOptions extends MapOptions {
  gameModes: WotGameModesData;
}
