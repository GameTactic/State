import { AbstractHistoryOptions } from '../../types';

export interface TacticHistorySwitchOptions extends AbstractHistoryOptions {
    userId: string;
    newTacticId: string | undefined;
    oldTacticId: string | undefined;
}
