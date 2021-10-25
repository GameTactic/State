/**
 * This class contains data of an connect event
 * @author Eirik Måseidvåg
 */
import { LifecycleHistoryConnectOptions } from './types';
import History from '../../History';
import HistoryEvent from '../../HistoryEvent';
import { HistoryEventModules } from '../../types';
import { HistoryEventLifecycle } from '../types';

export default class LifecycleHistoryConnect extends History {
    /**
     * The ID of the user who connected
     * @public
     */
    public readonly userId: string

    constructor (options: LifecycleHistoryConnectOptions) {
        super({
            ...options,
            event: new HistoryEvent({
                module: HistoryEventModules.LIFECYCLE,
                event: HistoryEventLifecycle.CONNECT
            })
        });
        this.userId = options.userId;
    }
}
