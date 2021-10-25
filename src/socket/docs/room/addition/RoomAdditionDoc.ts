import SocketDoc from '../../SocketDoc';
import { HistoryEventModules, HistoryEventRoom } from '../../../../history';
import RoomHistoryAddition from '../../../../history/room/addition/RoomHistoryAddition';
import { SubscriberLevel } from '../../types';

export default class RoomAdditionDoc extends SocketDoc {
    public constructor() {
        super({
            title: 'Add room',
            description: 'Adds a room',
            module: HistoryEventModules.ROOM,
            event: HistoryEventRoom.ADDITION,
            level: SubscriberLevel.VIEW
        });
    }
}

export type RoomAdditionDocPayload = {
    history: RoomHistoryAddition;
}
