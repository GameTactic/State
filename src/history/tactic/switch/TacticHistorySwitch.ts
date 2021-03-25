/**
 * This class contains data of an tactic switch event
 * @author Eirmas
 */
import History from '../../History';
import HistoryEvent from '../../HistoryEvent';
import { HistoryEventModules } from '../../types';
import { HistoryEventTactic } from '../types';
import { TacticHistorySwitchOptions } from './types';
import { Serialize } from 'serialazy';
import SerializeHelper from '../../../util/SerializeHelper';

@Serialize<TacticHistorySwitchOptions, TacticHistorySwitch>({
    down: ((history: TacticHistorySwitch) => SerializeHelper.toDown(history)),
    up: ((options: TacticHistorySwitchOptions) => new TacticHistorySwitch(options))
})
export default class TacticHistorySwitch extends History {
    /**
     * The user who switched tactic
     * @private
     */
    private readonly _userId: string

    /**
     * The tactic the user switched to
     * @private
     */
    private readonly _newTacticId: string

    /**
     * The tactic the user switched from
     * @private
     */
    private readonly _oldTacticId: string

    constructor (options: TacticHistorySwitchOptions) {
        super({
            ...options,
            event: new HistoryEvent({
                module: HistoryEventModules.TACTIC,
                event: HistoryEventTactic.SWITCH
            })
        });
        this._userId = options.userId;
        this._newTacticId = options.newTacticId;
        this._oldTacticId = options.oldTacticId;
    }

    /**
     * Return the ID of the user who switched
     * @returns User
     */
    get userId (): string {
        return this._userId;
    }

    /**
     * Return the ID of the tactic the user switched to
     * @returns Tactic
     */
    get newTacticId (): string {
        return this._newTacticId;
    }

    /**
     * Return the ID of the added tactic the user switched from
     * @returns tacticId: string
     */
    get oldTacticId (): string {
        return this._oldTacticId;
    }
}
