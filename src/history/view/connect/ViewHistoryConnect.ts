/**
 * This class contains data of an view connect event
 * @author Eirik Måseidvåg
 */
import History from '../../History';
import HistoryEvent from '../../HistoryEvent';
import { HistoryEventModules } from '../../types';
import { HistoryEventView } from '../types';
import { ViewHistoryConnectOptions } from './types';

export default class ViewHistoryConnect extends History {
    /**
     * The user who connected to the view
     * @public
     */
    public readonly userId: string

    /**
     * The view the user connected to
     * @public
     */
    public readonly viewId: string

    constructor (options: ViewHistoryConnectOptions) {
        super({
            ...options,
            event: new HistoryEvent({
                module: HistoryEventModules.VIEW,
                event: HistoryEventView.CONNECT
            })
        });
        this.userId = options.userId;
        this.viewId = options.viewId;
    }
}
