import SocketDoc, { SocketEventType } from '../../types';
import RoomHistoryPrivate from '../../../../history/room/private/RoomHistoryPrivate';

export default class SetIsPrivateDoc implements SocketDoc {
    title = 'Set Is Private';
    description = 'Set if a room is private or not';
    event = 'room/setIsPrivate';
    type = SocketEventType.IN_AND_OUT;
}

export type SetIsPrivateDocPayload = {
    history: RoomHistoryPrivate;
};
