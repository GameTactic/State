import { HistoryEventHub, HistoryEventModules } from '../../../../history';
import HubHistoryRoomUpdate from '../../../../history/hub/roomUpdate/HubHistoryRoomUpdate';
import { SubscriberLevel } from '../../types';
import HubRoomSocketDoc from "../../HubRoomSocketDoc";
import {RoomExtended} from "../types";

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
    room: RoomExtended;
}
