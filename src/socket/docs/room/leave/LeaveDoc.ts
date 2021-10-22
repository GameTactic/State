import SocketDoc from '../../SocketDoc';
import { HistoryEventModules, HistoryEventRoom } from '../../../../history';
import RoomHistoryLeave from '../../../../history/room/leave/RoomHistoryLeave';
import {SubscriberLevel} from "../../types";

export default class LeaveDoc extends SocketDoc {
    public constructor() {
        super({
            title: 'Leave room',
            description: 'Disconnects user to a room in socket',
            module: HistoryEventModules.ROOM,
            event: HistoryEventRoom.LEAVE,
            level: SubscriberLevel.ROOM
        });
    }
}

export type LeaveDocPayload = {
    history: RoomHistoryLeave;
};
