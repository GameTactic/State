import { AbstractHistoryOptions } from '../../types';

export interface TacticHistorySwitchOptions extends AbstractHistoryOptions {
    oldTacticId: string;
    newTacticId: string;
    userId: string;
}
