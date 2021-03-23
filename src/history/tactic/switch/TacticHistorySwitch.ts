/**
 * This class contains data of an tactic switch event
 * @author Eirmas
 */
import History from '../../History';
import HistoryEvent from '../../HistoryEvent';
import { HistoryEventModules } from '../../types';
import Tactic from '../../../tactic/Tactic';
import { HistoryEventTactic } from '../types';
import { TacticHistorySwitchOptions } from './types';
import User from '../../../user/User';

export default class TacticHistorySwitch extends History {
    /**
     * The user who switched tactic
     * @private
     */
    private readonly _user: User

    /**
     * The tactic the user switched to
     * @private
     */
    private readonly _newTactic: Tactic

    /**
     * The tactic the user switched from
     * @private
     */
    private readonly _oldTactic: Tactic

    constructor (options: TacticHistorySwitchOptions) {
        super({
            ...options,
            event: new HistoryEvent({
                module: HistoryEventModules.TACTIC,
                event: HistoryEventTactic.SWITCH
            })
        });
        this._user = options.user;
        this._newTactic = options.newTactic;
        this._oldTactic = options.oldTactic;
    }

    /**
     * Return the user who switched
     * @returns User
     */
    get user (): User {
        return this._user;
    }

    /**
     * Return the tactic the user switched to
     * @returns Tactic
     */
    get newTactic (): Tactic {
        return this._newTactic;
    }

    /**
     * Return the tactic the user switched from
     * @returns Tactic
     */
    get oldTactic (): Tactic {
        return this._oldTactic;
    }
}
