import { HistoryEventHub, HistoryEventModules } from '../../../../history';
import HubHistoryRoomAddition from '../../../../history/hub/roomAddition/HubHistoryRoomAddition';
import { SubscriberLevel } from '../../types';
import HubRoomSocketDoc from '../../HubRoomSocketDoc';
import Room from "../../../../room/Room";

export default class HubRoomAdditionDoc extends HubRoomSocketDoc {
    public constructor() {
        super({
            title: 'Room Addition',
            description: 'Adds a new room',
            module: HistoryEventModules.HUB,
            event: HistoryEventHub.ROOM_ADDITION,
            level: SubscriberLevel.HUB
        });
    }
}

export type HubRoomAdditionInDocPayload = {
    history: HubHistoryRoomAddition;
}

export type HubRoomAdditionOutDocPayload = {
    room: Room;
}
