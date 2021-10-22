/**
 * This class contains data of an disconnect event
 * @author Eirmas
 */
import { LifecycleHistoryDisconnectOptions } from './types';
import History from '../../History';
import HistoryEvent from '../../HistoryEvent';
import { HistoryEventModules } from '../../types';
import { HistoryEventLifecycle } from '../types';

export default class LifecycleHistoryDisconnect extends History {
    /**
     * The ID of the user who disconnected
     * @public
     */
    public readonly userId: string

    constructor (options: LifecycleHistoryDisconnectOptions) {
        super({
            ...options,
            event: new HistoryEvent({
                module: HistoryEventModules.LIFECYCLE,
                event: HistoryEventLifecycle.DISCONNECT
            })
        });
        this.userId = options.userId;
    }
}
