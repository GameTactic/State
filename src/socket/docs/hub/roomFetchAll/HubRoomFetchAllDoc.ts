import { HistoryEventModules, HistoryEventHub } from '../../../../history';
import { SubscriberLevel } from '../../types';
import HubRoomSocketDoc from "../../HubRoomSocketDoc";
import {RoomExtended} from "../types";

export default class HubRoomFetchAllDoc extends HubRoomSocketDoc {
    public constructor() {
        super({
            title: 'Hub Room Fetch All',
            description: 'Fetches all rooms belonging to user',
            module: HistoryEventModules.HUB,
            event: HistoryEventHub.ROOM_FETCH_ALL,
            level: SubscriberLevel.HUB
        });
    }
}

export type HubRoomFetchAllInDocPayload = void

export type HubRoomFetchAllOutDocPayload = {
    bookmark: string | null | undefined;
    rooms: Array<RoomExtended>;
};
