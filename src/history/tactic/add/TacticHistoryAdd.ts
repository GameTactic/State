/**
 * This class contains data of an tactic add event
 * @author Eirmas
 */
import History from '../../History';
import HistoryEvent from '../../HistoryEvent';
import { HistoryEventModules } from '../../types';
import { HistoryEventTactic } from '../types';
import { Serialize } from 'serialazy';
import SerializeHelper from '../../../util/SerializeHelper';
import { TacticHistoryAddOptions } from './types';

@Serialize<TacticHistoryAddOptions, TacticHistoryAdd>({
    down: ((history: TacticHistoryAdd) => SerializeHelper.toDown(history)),
    up: ((options: TacticHistoryAddOptions) => new TacticHistoryAdd(options))
})
export default class TacticHistoryAdd extends History {
    /**
     * The ID of the tactic added
     * @private
     */
    private readonly _tacticId: string

    constructor (options: TacticHistoryAddOptions) {
        super({
            ...options,
            event: new HistoryEvent({
                module: HistoryEventModules.TACTIC,
                event: HistoryEventTactic.ADD
            })
        });
        this._tacticId = options.tacticId;
    }

    /**
     * Return the ID of the added tactic
     * @returns tacticId: string
     */
    get tacticId (): string {
        return this._tacticId;
    }
}
