import SocketDoc from '../../SocketDoc';
import { HistoryEventModules, HistoryEventHub } from '../../../../history';
import HubHistoryDisconnect from '../../../../history/hub/disconnect/HubHistoryDisconnect';
import { SubscriberLevel } from '../../types';

export default class HubDisconnectDoc extends SocketDoc {
    public constructor() {
        super({
            title: 'Disconnect hub',
            description: 'Disconnects user to a hub in socket',
            module: HistoryEventModules.HUB,
            event: HistoryEventHub.DISCONNECT,
            level: SubscriberLevel.ROOM
        });
    }
}

export type HubDisconnectInDocPayload = void;

export type HubDisconnectOutDocPayload = {
    history: HubHistoryDisconnect;
};
