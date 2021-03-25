/**
 * This class contains data of an setPrivate event on the room
 * @author Eirmas
 */
import History from '../../History';
import { RoomHistoryPrivateOptions } from './types';
import HistoryEvent from '../../HistoryEvent';
import { HistoryEventModules } from '../../types';
import { HistoryEventRoom } from '../types';

export default class RoomHistoryPrivate extends History {
    /**
     * The variable telling if the room was set to private or not
     * @public
     */
    public readonly isPrivate: boolean

    constructor (options: RoomHistoryPrivateOptions) {
        super({
            ...options,
            event: new HistoryEvent({
                module: HistoryEventModules.ROOM,
                event: HistoryEventRoom.SET_IS_PRIVATE
            })
        });
        this.isPrivate = options.isPrivate;
    }
}
