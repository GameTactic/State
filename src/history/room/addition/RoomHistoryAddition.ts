import { RoomHistoryAdditionOptions } from './types';
import History from '../../History';
import HistoryEvent from '../../HistoryEvent';
import { HistoryEventModules } from '../../types';
import { HistoryEventRoom } from '../types';
import Room from '../../../room/Room';

/**
 * This class contains data of a room creation event
 * @author Eirmas
 */
export default class RoomHistoryAddition extends History {
    /**
     * The room to be created
     * @public
     */
    public readonly room: Room

    constructor (options: RoomHistoryAdditionOptions) {
        super({
            ...options,
            event: new HistoryEvent({
                module: HistoryEventModules.ROOM,
                event: HistoryEventRoom.ADDITION
            })
        });
        this.room = options.room;
    }
}
