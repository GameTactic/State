import HubSocketDoc from '../../HubSocketDoc';
import { HistoryEventModules, HistoryEventHub } from '../../../../history';
import { SubscriberLevel } from '../../types';

export default class HubDisconnectDoc extends HubSocketDoc {
    public constructor() {
        super({
            title: 'Disconnect hub',
            description: 'Disconnects user to a hub in socket',
            module: HistoryEventModules.HUB,
            event: HistoryEventHub.DISCONNECT,
            level: SubscriberLevel.HUB
        });
    }
}

export type HubDisconnectDocPayload = void;
