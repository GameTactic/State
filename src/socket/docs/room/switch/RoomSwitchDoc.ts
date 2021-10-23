import SocketDoc from '../../SocketDoc';
import { HistoryEventModules, HistoryEventRoom } from '../../../../history';
import { SubscriberLevel } from '../../types';
import RoomHistorySwitch from '../../../../history/room/switch/RoomHistorySwitch';
import User from '../../../../user/User';
import { PartialState } from '../../../state';

export default class RoomSwitchDoc extends SocketDoc {
    public constructor() {
        super({
            title: 'Switch room',
            description: 'Switch to a room',
            module: HistoryEventModules.ROOM,
            event: HistoryEventRoom.SWITCH,
            level: SubscriberLevel.ROOM
        });
    }
}

export type RoomSwitchInDocPayload = {
    history: RoomHistorySwitch;
};

export type RoomSwitchOutDocPayload = {
    history: RoomHistorySwitch;
    data: {
        user: User;
        state?: PartialState;
    };
};
