import SocketDoc from '../../types';
import { HistoryEventModules, HistoryEventRoom } from '../../../../history';
import RoomHistoryCreate from '../../../../history/room/create/RoomHistoryCreate';

export default class CreateDoc extends SocketDoc {
    public constructor() {
        super({
            title: 'Create room',
            description: 'Creates a room',
            module: HistoryEventModules.ROOM,
            event: HistoryEventRoom.CREATE,
            requireRoom: false
        });
    }
}

export type CreateDocPayload = {
    history: RoomHistoryCreate;
}
