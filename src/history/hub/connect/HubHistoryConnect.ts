/**
 * This class contains data of a hub connect event
 * @author Eirik Måseidvåg
 */
import { HubHistoryConnectOptions } from './types';
import History from '../../History';
import HistoryEvent from '../../HistoryEvent';
import { HistoryEventModules } from '../../types';
import { HistoryEventHub } from '../types';

export default class HubHistoryConnect extends History {
    /**
     * The ID of the user who connected
     * @public
     */
    public readonly userId: string

    constructor (options: HubHistoryConnectOptions) {
        super({
            ...options,
            event: new HistoryEvent({
                module: HistoryEventModules.HUB,
                event: HistoryEventHub.CONNECT
            })
        });
        this.userId = options.userId;
    }
}
