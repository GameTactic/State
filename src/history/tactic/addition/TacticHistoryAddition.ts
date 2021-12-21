/**
 * This class contains data of an tactic addition event
 * @author Eirik Måseidvåg
 */
import History from '../../History';
import HistoryEvent from '../../HistoryEvent';
import { HistoryEventModules } from '../../types';
import { HistoryEventTactic } from '../types';
import { TacticHistoryAdditionOptions } from './types';
import Tactic from "../../../tactic/Tactic";

export default class TacticHistoryAddition extends History {
    /**
     * The ID of the tactic added
     * @public
     */
    public readonly tactic: Tactic

    constructor (options: TacticHistoryAdditionOptions) {
        super({
            ...options,
            event: new HistoryEvent({
                module: HistoryEventModules.TACTIC,
                event: HistoryEventTactic.ADDITION
            })
        });
        this.tactic = options.tactic;
    }
}
