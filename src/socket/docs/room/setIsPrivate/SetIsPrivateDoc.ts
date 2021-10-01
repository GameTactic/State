import SocketDoc from '../../types';
import RoomHistoryPrivate from '../../../../history/room/private/RoomHistoryPrivate';
import { HistoryEventModules, HistoryEventRoom } from '../../../../history';

export default class SetIsPrivateDoc extends SocketDoc {
    public constructor() {
        super({
            title: 'Set Is Private',
            description: 'Set if a room is private or not',
            module: HistoryEventModules.ROOM,
            event: HistoryEventRoom.SET_IS_PRIVATE
        });
    }
}

export type SetIsPrivateDocPayload = {
    history: RoomHistoryPrivate;
};
