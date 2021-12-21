import { AbstractHistoryOptions } from '../../types';

export interface HubHistoryRoomUpdateOptions extends AbstractHistoryOptions {
    roomId: string;
    name?: string;
    description?: string;
    cover?: string | null;
    isPrivate?: boolean;
}
