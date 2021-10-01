import { AbstractHistoryOptions } from '../../types';

export interface RoomHistoryJoinOptions extends AbstractHistoryOptions {
    userId: string;
    roomId: string;
}
