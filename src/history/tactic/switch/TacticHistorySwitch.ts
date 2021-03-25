/**
 * This class contains data of an tactic switch event
 * @author Eirmas
 */
import History from '../../History';
import HistoryEvent from '../../HistoryEvent';
import { HistoryEventModules } from '../../types';
import { HistoryEventTactic } from '../types';
import { TacticHistorySwitchOptions } from './types';

export default class TacticHistorySwitch extends History {
    /**
     * The user who switched tactic
     * @public
     */
    public readonly userId: string

    /**
     * The tactic the user switched to
     * @public
     */
    public readonly newTacticId: string | undefined

    /**
     * The tactic the user switched from
     * @public
     */
    public readonly oldTacticId: string | undefined

    constructor (options: TacticHistorySwitchOptions) {
        super({
            ...options,
            event: new HistoryEvent({
                module: HistoryEventModules.TACTIC,
                event: HistoryEventTactic.SWITCH
            })
        });
        this.userId = options.userId;
        this.newTacticId = options.newTacticId;
        this.oldTacticId = options.oldTacticId;
    }
}
