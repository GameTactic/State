import SocketDoc, { SocketEventType } from '../../types';
import RoomHistoryPrivate from '../../../../history/room/private/RoomHistoryPrivate';
import { HistoryEventModules, HistoryEventRoom } from '../../../../history';

export default class SetIsPrivateDoc implements SocketDoc {
    title = 'Set Is Private';
    description = 'Set if a room is private or not';
    event = `${HistoryEventModules.ROOM}/${HistoryEventRoom.SET_IS_PRIVATE}`;
    type = SocketEventType.IN_AND_OUT;
}

export type SetIsPrivateDocPayload = {
    history: RoomHistoryPrivate;
};
