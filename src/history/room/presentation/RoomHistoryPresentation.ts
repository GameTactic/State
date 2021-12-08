import { RoomHistoryPresentationOptions } from './types';
import History from '../../History';
import HistoryEvent from '../../HistoryEvent';
import { HistoryEventModules } from '../../types';
import { HistoryEventRoom } from '../types';

/**
 * This class contains data of an room presentation event
 * @author Eirik Måseidvåg
 */
export default class RoomHistoryPresentation extends History {
    /**
     * The ID of the user who is presenting
     * @public
     */
    public readonly userId: string | undefined

    constructor (options: RoomHistoryPresentationOptions) {
        super({
            ...options,
            event: new HistoryEvent({
                module: HistoryEventModules.ROOM,
                event: HistoryEventRoom.PRESENTATION
            })
        });
        this.userId = options.userId;
    }
}
