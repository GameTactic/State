import { RoomState } from './room';
import { StageState } from './stage';
import { Collection, Tactic } from './tactic';
import { User } from './user';

export interface RootState {
    collections: { [key: string]: Collection };
    users: { [key: string]: User };
    tactics: { [key: string]: Tactic };
    room: RoomState;
    stage: { [key: string]: StageState };
}
