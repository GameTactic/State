import SocketDoc from '../../SocketDoc';
import { HistoryEventModules, HistoryEventRoom } from '../../../../history';
import RoomHistoryDisconnect from '../../../../history/room/disconnect/RoomHistoryDisconnect';
import { SubscriberLevel } from '../../types';

export default class RoomDisconnectDoc extends SocketDoc {
    public constructor() {
        super({
            title: 'Disconnect room',
            description: 'Disconnects user to a room in socket',
            module: HistoryEventModules.ROOM,
            event: HistoryEventRoom.DISCONNECT,
            level: SubscriberLevel.ROOM
        });
    }
}

export type RoomDisconnectInDocPayload = void;

export type RoomDisconnectOutDocPayload = {
    history: RoomHistoryDisconnect;
};
