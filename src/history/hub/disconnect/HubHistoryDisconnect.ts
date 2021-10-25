/**
 * This class contains data of a hub disconnect event
 * @author Eirik Måseidvåg
 */
import { HubHistoryDisconnectOptions } from './types';
import History from '../../History';
import HistoryEvent from '../../HistoryEvent';
import { HistoryEventModules } from '../../types';
import { HistoryEventHub } from '../types';

export default class HubHistoryDisconnect extends History {
    constructor (options: HubHistoryDisconnectOptions) {
        super({
            ...options,
            event: new HistoryEvent({
                module: HistoryEventModules.HUB,
                event: HistoryEventHub.DISCONNECT
            })
        });
    }
}
