/**
 * This class contains data of a view disconnect event
 * @author Eirik Måseidvåg
 */
import History from '../../History';
import HistoryEvent from '../../HistoryEvent';
import { HistoryEventModules } from '../../types';
import {ViewHistoryDisconnectOptions} from "./types";
import {HistoryEventView} from "../types";

export default class ViewHistoryDisconnect extends History {
    /**
     * The user who disconnected to the view
     * @public
     */
    public readonly userId: string

    /**
     * The view the user disconnected from
     * @public
     */
    public readonly viewId: string

    constructor (options: ViewHistoryDisconnectOptions) {
        super({
            ...options,
            event: new HistoryEvent({
                module: HistoryEventModules.VIEW,
                event: HistoryEventView.DISCONNECT
            })
        });
        this.userId = options.userId;
        this.viewId = options.viewId;
    }
}
