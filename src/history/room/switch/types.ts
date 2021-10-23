import { AbstractHistoryOptions } from '../../types';

export interface RoomHistorySwitchOptions extends AbstractHistoryOptions {
    userId: string;
    newRoomId: string;
    oldRoomId: string;
}
