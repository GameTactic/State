import { RoomHistoryDisconnectOptions } from './types';
import History from '../../History';
import HistoryEvent from '../../HistoryEvent';
import { HistoryEventModules } from '../../types';
import { HistoryEventRoom } from '../types';

/**
 * This class contains data of an room disconnect event
 * @author Eirmas
 */
export default class RoomHistoryDisconnect extends History {
    /**
     * The ID of the user who left the room
     * @public
     */
    public readonly userId: string

    /**
     * The ID of the room the user left
     */
    public readonly roomId: string

    constructor (options: RoomHistoryDisconnectOptions) {
        super({
            ...options,
            event: new HistoryEvent({
                module: HistoryEventModules.ROOM,
                event: HistoryEventRoom.DISCONNECT
            })
        });
        this.userId = options.userId;
        this.roomId = options.roomId;
    }
}