import { AbstractHistoryOptions } from '../../types';

export interface RoomHistoryDisconnectOptions extends AbstractHistoryOptions {
    userId: string;
    roomId: string;
}
