/**
 * This class contains data of an tactic add event
 * @author Eirmas
 */
import History from "../../History";
import HistoryEvent from "../../HistoryEvent";
import {HistoryEventModules} from "../../types";
import {TacticData} from "../../../socket/state";
import Tactic from "../../../tactic/Tactic";
import {HistoryEventTactic} from "../types";
import {TacticHistoryAddOptions} from './types';

export default class TacticHistoryAdd extends History {
    /**
     * The tactic data added
     * @private
     */
    private readonly _data: TacticData

    constructor (options: TacticHistoryAddOptions) {
        super({
            ...options,
            event: new HistoryEvent({
                module: HistoryEventModules.TACTIC,
                event: HistoryEventTactic.ADD
            })
        })
        this._data = options.data
    }

    /**
     * Return the added tactic
     * @returns Tactic
     */
    get tactic (): Tactic {
        return this._data.tactic
    }
}
