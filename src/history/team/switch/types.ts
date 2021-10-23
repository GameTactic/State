import { AbstractHistoryOptions } from '../../types';

export interface TeamHistorySwitchOptions extends AbstractHistoryOptions {
    userId: string;
    newTeamId: string;
    oldTeamId: string;
}
