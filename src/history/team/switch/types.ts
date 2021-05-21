import { AbstractHistoryOptions } from '../../types';

export interface TeamHistorySwitchOptions extends AbstractHistoryOptions {
    userId: string;
    newTeamId: string | undefined;
    oldTeamId: string | undefined;
}
