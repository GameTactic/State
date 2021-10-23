import { AbstractHistoryOptions } from '../../types';

export interface TeamHistoryConnectOptions extends AbstractHistoryOptions {
    userId: string;
    teamId: string;
}
