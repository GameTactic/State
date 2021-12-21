import HubSocketDoc from '../../HubSocketDoc';
import { HistoryEventModules, HistoryEventHub } from '../../../../history';
import { SubscriberLevel } from '../../types';

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

export type HubConnectDocPayload = void
