import { AbstractHistoryOptions } from '../../types';

export interface RoomHistoryLeaveOptions extends AbstractHistoryOptions {
    userId: string;
    roomId: string;
}
