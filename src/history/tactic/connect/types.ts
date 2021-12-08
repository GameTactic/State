import { AbstractHistoryOptions } from '../../types';

export interface TacticHistoryConnectOptions extends AbstractHistoryOptions {
    userId: string;
    tacticId: string;
    teamId?: string;
    viewId?: string;
}
