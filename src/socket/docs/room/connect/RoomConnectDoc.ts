import SocketDoc from '../../SocketDoc';
import { PartialState } from '../../../state';
import User from '../../../../user/User';
import { HistoryEventModules, HistoryEventRoom } from '../../../../history';
import RoomHistoryConnect from '../../../../history/room/connect/RoomHistoryConnect';
import { SubscriberLevel } from '../../types';

export default class RoomConnectDoc extends SocketDoc {
    public constructor() {
        super({
            title: 'Connect room',
            description: 'Connects user to a room in socket',
            module: HistoryEventModules.ROOM,
            event: HistoryEventRoom.CONNECT,
            level: SubscriberLevel.ROOM
        });
    }
}

export type RoomConnectInDocPayload = {
    history: RoomHistoryConnect;
}

export type RoomConnectOutDocPayload = {
    history: RoomHistoryConnect;
    data: {
        user: User;
        state?: PartialState;
    };
};
