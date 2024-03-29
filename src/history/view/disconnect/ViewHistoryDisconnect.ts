/**
 * This class contains data of a view disconnect event
 * @author Eirik Måseidvåg
 */
import History from '../../History';
import HistoryEvent from '../../HistoryEvent';
import { HistoryEventModules } from '../../types';
import { ViewHistoryDisconnectOptions } from './types';
import { HistoryEventView } from '../types';

export default class ViewHistoryDisconnect extends History {
    /**
     * The user who disconnected from the view
     * @public
     */
    public readonly userId: string

    constructor (options: ViewHistoryDisconnectOptions) {
        super({
            ...options,
            event: new HistoryEvent({
                module: HistoryEventModules.VIEW,
                event: HistoryEventView.DISCONNECT
            })
        });
        this.userId = options.userId;
    }
}
