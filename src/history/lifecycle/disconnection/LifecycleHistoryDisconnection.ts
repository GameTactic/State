/**
 * This class contains data of an disconnection event
 * @author Eirmas
 */
import { LifecycleHistoryDisconnectionOptions } from './types';
import History from '../../History';
import HistoryEvent from '../../HistoryEvent';
import { HistoryEventModules } from '../../types';
import { HistoryEventLifecycle } from '../types';
import { Serialize } from 'serialazy';

@Serialize<LifecycleHistoryDisconnectionOptions, LifecycleHistoryDisconnection>({
    down: ((history: LifecycleHistoryDisconnection) => ({
        id: history.id,
        userId: history.userId,
        timestamp: history.timestamp,
        creatorId: history.userId
    })),
    up: ((options: LifecycleHistoryDisconnectionOptions) => new LifecycleHistoryDisconnection(options))
})
export default class LifecycleHistoryDisconnection extends History {
    /**
     * The ID of the user who disconnected
     * @private
     */
    private readonly _userId: string

    constructor (options: LifecycleHistoryDisconnectionOptions) {
        super({
            ...options,
            event: new HistoryEvent({
                module: HistoryEventModules.LIFECYCLE,
                event: HistoryEventLifecycle.DISCONNECTION
            })
        });
        this._userId = options.userId;
    }

    /**
     * Return the ID of the user who disconnected
     * @returns userId: string
     */
    get userId (): string {
        return this._userId;
    }
}
