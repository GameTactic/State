/**
 * This class contains data of an tactic delete event
 * @author Eirik Måseidvåg
 */
import History from '../../History';
import HistoryEvent from '../../HistoryEvent';
import { HistoryEventModules } from '../../types';
import { HistoryEventTactic } from '../types';
import { TacticHistoryDeleteOptions } from './types';

export default class TacticHistoryDelete extends History {
    /**
     * The ID of the tactic to be deleted
     * @public
     */
    public readonly tacticId: string

    constructor (options: TacticHistoryDeleteOptions) {
        super({
            ...options,
            event: new HistoryEvent({
                module: HistoryEventModules.TACTIC,
                event: HistoryEventTactic.DELETE
            })
        });
        this.tacticId = options.tacticId;
    }
}
