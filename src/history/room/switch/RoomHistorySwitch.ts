/**
 * This class contains data of an tactic connect event
 * @author Eirmas
 */
import History from '../../History';
import HistoryEvent from '../../HistoryEvent';
import { HistoryEventModules } from '../../types';
import { HistoryEventRoom } from '../types';
import { RoomHistorySwitchOptions } from './types';

export default class RoomHistorySwitch extends History {
    /**
     * The user who connected to the tactic
     * @public
     */
    public readonly userId: string

    /**
     * The tactic the user switched to
     * @public
     */
    public readonly newRoomId: string

    /**
     * The tactic the user switched from
     * @public
     */
    public readonly oldRoomId: string

    constructor (options: RoomHistorySwitchOptions) {
        super({
            ...options,
            event: new HistoryEvent({
                module: HistoryEventModules.TACTIC,
                event: HistoryEventRoom.SWITCH
            })
        });
        this.userId = options.userId;
        this.newRoomId = options.newRoomId;
        this.oldRoomId = options.oldRoomId;
    }
}
