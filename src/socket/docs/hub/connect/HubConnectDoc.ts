import HubSocketDoc from '../../HubSocketDoc';
import { HistoryEventModules, HistoryEventHub } from '../../../../history';
import { SubscriberLevel } from '../../types';
import Room from '../../../../room/Room';

export default class HubConnectDoc extends HubSocketDoc {
    public constructor() {
        super({
            title: 'Connect hub',
            description: 'Connects user to a hub in socket',
            module: HistoryEventModules.HUB,
            event: HistoryEventHub.CONNECT,
            level: SubscriberLevel.HUB
        });
    }
}

export type HubConnectInDocPayload = void

export type HubConnectOutDocPayload = {
    rooms: Array<Room>;
};
