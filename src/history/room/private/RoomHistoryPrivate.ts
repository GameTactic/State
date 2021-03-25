/**
 * This class contains data of an setPrivate event on the room
 * @author Eirmas
 */
import History from '../../History';
import { RoomHistoryPrivateOptions } from './types';
import HistoryEvent from '../../HistoryEvent';
import { HistoryEventModules } from '../../types';
import { HistoryEventRoom } from '../types';
import { Serialize } from 'serialazy';
import SerializeHelper from '../../../util/SerializeHelper';

@Serialize<RoomHistoryPrivateOptions, RoomHistoryPrivate>({
    down: ((history: RoomHistoryPrivate) => SerializeHelper.toDown(history)),
    up: ((options: RoomHistoryPrivateOptions) => new RoomHistoryPrivate(options))
})
export default class RoomHistoryPrivate extends History {
    /**
     * The variable telling if the room was set to private or not
     * @private
     */
    private readonly _isPrivate: boolean

    constructor (options: RoomHistoryPrivateOptions) {
        super({
            ...options,
            event: new HistoryEvent({
                module: HistoryEventModules.ROOM,
                event: HistoryEventRoom.SET_IS_PRIVATE
            })
        });
        this._isPrivate = options.isPrivate;
    }

    /**
     * Returns if the room was set to private or not
     * @returns boolean
     */
    get isPrivate (): boolean {
        return this._isPrivate;
    }
}
