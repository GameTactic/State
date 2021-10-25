import { HubHistoryRoomAdditionOptions } from './types';
import History from '../../History';
import HistoryEvent from '../../HistoryEvent';
import { HistoryEventModules } from '../../types';
import Room from '../../../room/Room';
import { HistoryEventHub } from '../types';

/**
 * This class contains data of a room creation event
 * @author Eirik Måseidvåg
 */
export default class HubHistoryRoomAddition extends History {
    /**
     * The room to be created
     * @public
     */
    public readonly room: Room

    constructor (options: HubHistoryRoomAdditionOptions) {
        super({
            ...options,
            event: new HistoryEvent({
                module: HistoryEventModules.HUB,
                event: HistoryEventHub.ADDITION
            })
        });
        this.room = options.room;
    }
}
