import { RoomHistoryJoinOptions } from './types';
import History from '../../History';
import HistoryEvent from '../../HistoryEvent';
import { HistoryEventModules } from '../../types';
import { HistoryEventRoom } from '../types';

/**
 * This class contains data of an room connect event
 * @author Eirmas
 */
export default class RoomHistoryJoin extends History {
    /**
     * The ID of the user who joined the room
     * @public
     */
    public readonly userId: string

    /**
     * The ID of the room the user joined
     */
    public readonly roomId: string

    constructor (options: RoomHistoryJoinOptions) {
        super({
            ...options,
            event: new HistoryEvent({
                module: HistoryEventModules.ROOM,
                event: HistoryEventRoom.JOIN
            })
        });
        this.userId = options.userId;
        this.roomId = options.roomId;
    }
}
