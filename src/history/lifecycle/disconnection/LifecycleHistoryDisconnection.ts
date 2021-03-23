/**
 * This class contains data of an disconnection event
 * @author Eirmas
 */
import User from '../../../user/User';
import { LifecycleHistoryDisconnectionOptions } from './types';
import History from '../../History';
import HistoryEvent from '../../HistoryEvent';
import { HistoryEventModules } from '../../types';
import { HistoryEventLifecycle } from '../types';

export default class LifecycleHistoryDisconnection extends History {
    /**
     * The user who disconnected
     * @private
     */
    private readonly _user: User

    constructor (options: LifecycleHistoryDisconnectionOptions) {
        super({
            ...options,
            event: new HistoryEvent({
                module: HistoryEventModules.LIFECYCLE,
                event: HistoryEventLifecycle.DISCONNECTION
            })
        });
        this._user = options.user;
    }

    /**
     * Return the user who disconnected
     * @returns user: User
     */
    get user (): User {
        return this._user;
    }
}
