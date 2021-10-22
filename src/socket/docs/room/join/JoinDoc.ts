import SocketDoc from '../../SocketDoc';
import { PartialState } from '../../../state';
import User from '../../../../user/User';
import { HistoryEventModules, HistoryEventRoom } from '../../../../history';
import RoomHistoryJoin from '../../../../history/room/join/RoomHistoryJoin';
import {SubscriberLevel} from "../../types";

export default class JoinDoc extends SocketDoc {
    public constructor() {
        super({
            title: 'Join room',
            description: 'Connects user to a room in socket',
            module: HistoryEventModules.ROOM,
            event: HistoryEventRoom.JOIN,
            level: SubscriberLevel.ROOM
        });
    }
}

export type JoinInDocPayload = {
    history: RoomHistoryJoin;
}

export type JoinOutDocPayload = {
    history: RoomHistoryJoin;
    data: {
        user: User;
        state?: PartialState;
    };
};
