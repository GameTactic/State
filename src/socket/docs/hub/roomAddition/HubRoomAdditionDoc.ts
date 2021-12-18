import HubSocketDoc from '../../HubSocketDoc';
import { HistoryEventHub, HistoryEventModules } from '../../../../history';
import HubHistoryRoomAddition from '../../../../history/hub/roomAddition/HubHistoryRoomAddition';
import { SubscriberLevel } from '../../types';
import Room from "../../../../room/Room";

export default class HubRoomAdditionDoc extends HubSocketDoc {
    public constructor() {
        super({
            title: 'Room roomAddition',
            description: 'Adds a new room',
            module: HistoryEventModules.HUB,
            event: HistoryEventHub.ADDITION,
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
