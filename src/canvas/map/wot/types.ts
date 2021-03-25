import { MapOptions } from '../types';
import WotGameModesData from './WotGameModesData';
import WotStandardBattle from './gamemodes/WotStandardBattle';
import WotEncounterBattle from './gamemodes/WotEncounterBattle';
import WotAssaultBattle from './gamemodes/WotAssaultBattle';
import WotTeamBattle from './gamemodes/WotTeamBattle';

export interface WotMapOptions extends MapOptions {
  gameModes: WotGameModesData;
}

export interface WotGameModesDataOptions {
  standardBattle: WotStandardBattle;
  encounterBattle: WotEncounterBattle;
  assaultBattle: WotAssaultBattle;
  teamBattle: WotTeamBattle;
  [key: string]: any;
}
