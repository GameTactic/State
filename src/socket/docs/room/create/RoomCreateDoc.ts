import SocketDoc from '../../SocketDoc';
import { HistoryEventModules, HistoryEventRoom } from '../../../../history';
import RoomHistoryCreate from '../../../../history/room/create/RoomHistoryCreate';
import { SubscriberLevel } from '../../types';

export default class RoomCreateDoc extends SocketDoc {
    public constructor() {
        super({
            title: 'Create room',
            description: 'Creates a room',
            module: HistoryEventModules.ROOM,
            event: HistoryEventRoom.CREATE,
            level: SubscriberLevel.NONE
        });
    }
}

export type RoomCreateDocPayload = {
    history: RoomHistoryCreate;
}
