import { RoomHistoryConnectOptions } from './types';
import History from '../../History';
import HistoryEvent from '../../HistoryEvent';
import { HistoryEventModules } from '../../types';
import { HistoryEventRoom } from '../types';

/**
 * This class contains data of an room connect event
 * @author Eirik Måseidvåg
 */
export default class RoomHistoryConnect extends History {
    /**
     * The ID of the user who joined the room
     * @public
     */
    public readonly userId: string

    /**
     * The ID of the room the user joined
     */
    public readonly roomId: string

    constructor (options: RoomHistoryConnectOptions) {
        super({
            ...options,
            event: new HistoryEvent({
                module: HistoryEventModules.ROOM,
                event: HistoryEventRoom.CONNECT
            })
        });
        this.userId = options.userId;
        this.roomId = options.roomId;
    }
}
