import SocketDoc from '../../SocketDoc';
import RoomHistoryPrivate from '../../../../history/room/private/RoomHistoryPrivate';
import { HistoryEventModules, HistoryEventRoom } from '../../../../history';
import {SubscriberLevel} from "../../types";

export default class SetIsPrivateDoc extends SocketDoc {
    public constructor() {
        super({
            title: 'Set Is Private',
            description: 'Set if a room is private or not',
            module: HistoryEventModules.ROOM,
            event: HistoryEventRoom.SET_IS_PRIVATE,
            level: SubscriberLevel.ROOM
        });
    }
}

export type SetIsPrivateDocPayload = {
    history: RoomHistoryPrivate;
};
