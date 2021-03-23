/**
 * This class contains data of an user update event
 * @author Eirmas
 */
import History from "../../History";
import HistoryEvent from "../../HistoryEvent";
import {HistoryEventModules} from "../../types";
import {UserHistoryUpdateOptions} from './types';
import User from "../../../user/User";
import {HistoryEventUser} from "../types";

export default class UserHistoryUpdate extends History {
    /**
     * The old user object
     * @private
     */
    private readonly _oldUser: User

    /**
     * The new user object
     * @private
     */
    private readonly _newUser: User

    constructor (options: UserHistoryUpdateOptions) {
        super({
            ...options,
            event: new HistoryEvent({
                module: HistoryEventModules.USER,
                event: HistoryEventUser.UPDATE
            })
        })
        this._oldUser = options.oldUser
        this._newUser = options.newUser
    }

    /**
     * Returns the old user object
     * @returns User
     */
    get oldUser (): User {
        return this._oldUser
    }

    /**
     * Returns the new user object
     * @returns User
     */
    get newUser (): User {
        return this._newUser
    }
}
