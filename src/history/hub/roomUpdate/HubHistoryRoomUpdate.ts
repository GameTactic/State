import { HubHistoryRoomUpdateOptions } from './types';
import History from '../../History';
import HistoryEvent from '../../HistoryEvent';
import { HistoryEventModules } from '../../types';
import { HistoryEventHub } from '../types';

/**
 * This class contains data of a room update event
 * @author Eirik Måseidvåg
 */
export default class HubHistoryRoomUpdate extends History {
    /**
     * The ID of the room to be updated
     */
    public readonly roomId: string

    /**
     * The room name
     * @public
     */
    public readonly name: string | undefined

    /**
     * The room description
     * @public
     */
    public readonly description: string | undefined

    /**
     * The room cover
     * @public
     */
    public readonly cover: string | null | undefined

    /**
     * Determines weather or not the room is private
     * @public
     */
    public readonly isPrivate: boolean | undefined

    constructor (options: HubHistoryRoomUpdateOptions) {
        super({
            ...options,
            event: new HistoryEvent({
                module: HistoryEventModules.HUB,
                event: HistoryEventHub.ROOM_UPDATE
            })
        });
        this.roomId = options.roomId;
        this.name = options.name;
        this.description = options.description;
        this.cover = options.cover;
        this.isPrivate = options.isPrivate;
    }
}
