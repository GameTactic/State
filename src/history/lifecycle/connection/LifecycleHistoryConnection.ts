/**
 * This class contains data of an connection event
 * @author Eirmas
 */
import User from '../../../user/User';
import { LifecycleHistoryConnectionOptions } from './types';
import History from '../../History';
import HistoryEvent from '../../HistoryEvent';
import { HistoryEventModules } from '../../types';
import { HistoryEventLifecycle } from '../types';

export default class LifecycleHistoryConnection extends History {
    /**
     * The user who connected
     * @private
     */
    private readonly _user: User

    constructor (options: LifecycleHistoryConnectionOptions) {
        super({
            ...options,
            event: new HistoryEvent({
                module: HistoryEventModules.LIFECYCLE,
                event: HistoryEventLifecycle.CONNECTION
            })
        });
        this._user = options.user;
    }

    /**
     * Return the user who connected
     * @returns CanvasElement
     */
    get element (): User {
        return this._user;
    }
}
