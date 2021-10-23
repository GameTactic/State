import { AbstractHistoryOptions } from '../../types';

export interface TeamHistoryDisconnectOptions extends AbstractHistoryOptions {
    userId: string;
    teamId: string;
}
