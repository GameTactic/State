/**
 * This class contains data of an tactic addition event
 * @author Eirik Måseidvåg
 */
import History from '../../History';
import HistoryEvent from '../../HistoryEvent';
import { HistoryEventModules } from '../../types';
import { HistoryEventTactic } from '../types';
import { TacticHistoryAdditionOptions } from './types';

export default class TacticHistoryAddition extends History {
    /**
     * The ID of the tactic added
     * @public
     */
    public readonly tacticId: string

    constructor (options: TacticHistoryAdditionOptions) {
        super({
            ...options,
            event: new HistoryEvent({
                module: HistoryEventModules.TACTIC,
                event: HistoryEventTactic.ADDITION
            })
        });
        this.tacticId = options.tacticId;
    }
}
