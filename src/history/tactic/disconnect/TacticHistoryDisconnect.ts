/**
 * This class contains data of a tactic disconnect event
 * @author Eirik Måseidvåg
 */
import History from '../../History';
import HistoryEvent from '../../HistoryEvent';
import { HistoryEventModules } from '../../types';
import { HistoryEventTactic } from '../types';
import { TacticHistoryDisconnectOptions } from './types';

export default class TacticHistoryDisconnect extends History {
    /**
     * The user who disconnected to the tactic
     * @public
     */
    public readonly userId: string

    /**
     * The tactic the user disconnected from
     * @public
     */
    public readonly tacticId: string

    constructor (options: TacticHistoryDisconnectOptions) {
        super({
            ...options,
            event: new HistoryEvent({
                module: HistoryEventModules.TACTIC,
                event: HistoryEventTactic.DISCONNECT
            })
        });
        this.userId = options.userId;
        this.tacticId = options.tacticId;
    }
}
