/**
 * This class contains data of an connection event
 * @author Eirmas
 */
import { LifecycleHistoryConnectionOptions } from './types';
import History from '../../History';
import HistoryEvent from '../../HistoryEvent';
import { HistoryEventModules } from '../../types';
import { HistoryEventLifecycle } from '../types';

export default class LifecycleHistoryConnection extends History {
    /**
     * The ID of the user who connected
     * @public
     */
    public readonly userId: string

    constructor (options: LifecycleHistoryConnectionOptions) {
        super({
            ...options,
            event: new HistoryEvent({
                module: HistoryEventModules.LIFECYCLE,
                event: HistoryEventLifecycle.CONNECTION
            })
        });
        this.userId = options.userId;
    }
}
