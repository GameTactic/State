/**
 * This class contains data of an tactic update event
 * @author Eirik Måseidvåg
 */
import History from '../../History';
import HistoryEvent from '../../HistoryEvent';
import { HistoryEventModules } from '../../types';
import { HistoryEventTactic } from '../types';
import { TacticHistoryUpdateOptions } from './types';
import Tactic from '../../../tactic/Tactic';

export default class TacticHistoryUpdate extends History {
    /**
     * The ID of the tactic to be updated
     * @public
     */
    public readonly tacticId: string

    /**
     * The tactic changes
     * @public
     */
    public readonly changes: Partial<Omit<Tactic, 'id' | 'creatorId'>>

    constructor (options: TacticHistoryUpdateOptions) {
        super({
            ...options,
            event: new HistoryEvent({
                module: HistoryEventModules.TACTIC,
                event: HistoryEventTactic.UPDATE
            })
        });
        this.tacticId = options.tacticId;
        this.changes = options.changes;
    }
}
