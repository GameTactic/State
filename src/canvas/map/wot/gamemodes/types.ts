import WotTeamsPositions from '../positions/WotTeamsPositions';
import { Point } from '../../../../util';

export interface WotAssaultBattleOptions {
    teamsSpawnPositions: WotTeamsPositions;
    teamsBasePositions: WotTeamsPositions;
    [key: string]: any;
}

export interface WotEncounterBattleOptions {
    teamsSpawnPositions: WotTeamsPositions;
    controlPoint: Point;
    [key: string]: any;
}

export interface WotStandardBattleOptions {
    teamsBasePositions: WotTeamsPositions;
    [key: string]: any;
}
