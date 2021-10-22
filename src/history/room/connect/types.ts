import { AbstractHistoryOptions } from '../../types';

export interface RoomHistoryConnectOptions extends AbstractHistoryOptions {
    userId: string;
    roomId: string;
}
