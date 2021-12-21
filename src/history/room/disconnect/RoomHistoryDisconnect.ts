import { RoomHistoryDisconnectOptions } from './types';
import History from '../../History';
import HistoryEvent from '../../HistoryEvent';
import { HistoryEventModules } from '../../types';
import { HistoryEventRoom } from '../types';

/**
 * This class contains data of an room disconnect event
 * @author Eirik Måseidvåg
 */
export default class RoomHistoryDisconnect extends History {
    /**
     * The ID of the user who left the room
     * @public
     */
    public readonly userId: string

    constructor (options: RoomHistoryDisconnectOptions) {
        super({
            ...options,
            event: new HistoryEvent({
                module: HistoryEventModules.ROOM,
                event: HistoryEventRoom.DISCONNECT
            })
        });
        this.userId = options.userId;
    }
}
