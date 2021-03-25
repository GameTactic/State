/**
 * This class contains data of an tactic add event
 * @author Eirmas
 */
import History from '../../History';
import HistoryEvent from '../../HistoryEvent';
import { HistoryEventModules } from '../../types';
import { HistoryEventTactic } from '../types';
import { TacticHistoryAddOptions } from './types';

export default class TacticHistoryAdd extends History {
    /**
     * The ID of the tactic added
     * @public
     */
    public readonly tacticId: string

    constructor (options: TacticHistoryAddOptions) {
        super({
            ...options,
            event: new HistoryEvent({
                module: HistoryEventModules.TACTIC,
                event: HistoryEventTactic.ADD
            })
        });
        this.tacticId = options.tacticId;
    }
}
