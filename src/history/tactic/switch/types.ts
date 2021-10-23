import { AbstractHistoryOptions } from '../../types';

export interface TacticHistorySwitchOptions extends AbstractHistoryOptions {
    userId: string;
    newTacticId: string;
    oldTacticId: string;
}
