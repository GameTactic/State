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
import SerializeHelper from '../../../util/SerializeHelper';

@Serialize<LifecycleHistoryDisconnectionOptions, LifecycleHistoryDisconnection>({
    down: ((history: LifecycleHistoryDisconnection) => SerializeHelper.toDown(history)),
    up: ((options: LifecycleHistoryDisconnectionOptions) => new LifecycleHistoryDisconnection(options))
})
export default class LifecycleHistoryDisconnection extends History {
    /**
     * The ID of the user who disconnected
     * @public
     */
    public readonly userId: string

    constructor (options: LifecycleHistoryDisconnectionOptions) {
        super({
            ...options,
            event: new HistoryEvent({
                module: HistoryEventModules.LIFECYCLE,
                event: HistoryEventLifecycle.DISCONNECTION
            })
        });
        this.userId = options.userId;
    }
}
