import SocketDoc from '../../types';
import { HistoryEventModules, HistoryEventRoom } from '../../../../history';
import RoomHistoryLeave from '../../../../history/room/leave/RoomHistoryLeave';

export default class LeaveDoc extends SocketDoc {
    public constructor() {
        super({
            title: 'Leave room',
            description: 'Disconnects user to a room in socket',
            module: HistoryEventModules.ROOM,
            event: HistoryEventRoom.LEAVE
        });
    }
}

export type LeaveDocPayload = {
    history: RoomHistoryLeave;
};
