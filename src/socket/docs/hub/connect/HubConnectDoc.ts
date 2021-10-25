import SocketDoc from '../../SocketDoc';
import { PartialState } from '../../../state';
import User from '../../../../user/User';
import { HistoryEventModules, HistoryEventHub } from '../../../../history';
import HubHistoryConnect from '../../../../history/hub/connect/HubHistoryConnect';
import { SubscriberLevel } from '../../types';

export default class HubConnectDoc extends SocketDoc {
    public constructor() {
        super({
            title: 'Connect hub',
            description: 'Connects user to a hub in socket',
            module: HistoryEventModules.HUB,
            event: HistoryEventHub.CONNECT,
            level: SubscriberLevel.ROOM
        });
    }
}

export type HubConnectInDocPayload = {
    history: HubHistoryConnect;
}

export type HubConnectOutDocPayload = {
    history: HubHistoryConnect;
    data: {
        user: User;
        state?: PartialState;
    };
};
