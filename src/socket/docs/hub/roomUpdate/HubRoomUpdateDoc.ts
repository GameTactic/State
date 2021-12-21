import { HistoryEventHub, HistoryEventModules } from '../../../../history';
import HubHistoryRoomUpdate from '../../../../history/hub/roomUpdate/HubHistoryRoomUpdate';
import { SubscriberLevel } from '../../types';
import HubRoomSocketDoc from '../../HubRoomSocketDoc';
import Room from "../../../../room/Room";

export default class HubRoomUpdateDoc extends HubRoomSocketDoc {
    public constructor() {
        super({
            title: 'Room Update',
            description: 'Adds a new room',
            module: HistoryEventModules.HUB,
            event: HistoryEventHub.ROOM_UPDATE,
            level: SubscriberLevel.HUB,
            permissionScope: 'moderator'
        });
    }
}

export type HubRoomUpdateInDocPayload = {
    history: HubHistoryRoomUpdate;
}

export type HubRoomUpdateOutDocPayload = {
    room: Room;
}
