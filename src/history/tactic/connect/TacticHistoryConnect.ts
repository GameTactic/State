/**
 * This class contains data of an tactic connect event
 * @author Eirik Måseidvåg
 */
import History from '../../History';
import HistoryEvent from '../../HistoryEvent';
import { HistoryEventModules } from '../../types';
import { HistoryEventTactic } from '../types';
import { TacticHistoryConnectOptions } from './types';

export default class TacticHistoryConnect extends History {
    /**
     * The user who connected to the tactic
     * @public
     */
    public readonly userId: string

    /**
     * The tactic the user connected to
     * @public
     */
    public readonly tacticId: string

    constructor (options: TacticHistoryConnectOptions) {
        super({
            ...options,
            event: new HistoryEvent({
                module: HistoryEventModules.TACTIC,
                event: HistoryEventTactic.CONNECT
            })
        });
        this.userId = options.userId;
        this.tacticId = options.tacticId;
    }
}
