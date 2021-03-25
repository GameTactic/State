import { AbstractHistoryOptions } from '../../types';

export interface TacticHistorySwitchOptions extends AbstractHistoryOptions {
    oldTacticId: string | undefined;
    newTacticId: string | undefined;
    userId: string;
}
