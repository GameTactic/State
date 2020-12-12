import { RoomState } from './room';
import { StageState } from './stage';
import { Collection, Tactic } from './tactic';
import { User } from './user';
import { CanvasElement, CanvasElementHistory } from './canvas';
import { Team } from './team';

export interface State {
    collections: { [key: string]: Collection };
    users: { [key: string]: User };
    tactics: { [key: string]: Tactic };
    room: RoomState;
}

export interface RootState extends State, StateItems {
}

export interface StateItems {
    stages: { [key: string]: StageState };
    canvasElements: { [key: string]: CanvasElement[] };
    canvasElementHistories: { [key: string]: CanvasElementHistory[] };
    teams: { [key: string]: Team[] };
}
