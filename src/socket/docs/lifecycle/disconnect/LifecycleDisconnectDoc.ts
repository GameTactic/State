import SocketDoc from '../../SocketDoc';
import { HistoryEventLifecycle, HistoryEventModules } from '../../../../history';
import { SubscriberLevel } from '../../types';

export default class LifecycleDisconnectDoc extends SocketDoc {
    public constructor() {
        super({
            title: 'Disconnect',
            description: 'Disconnects user from socket',
            module: HistoryEventModules.LIFECYCLE,
            event: HistoryEventLifecycle.DISCONNECT,
            overrideEvent: 'disconnecting',
            level: SubscriberLevel.NONE
        });
    }
}

export type LifecycleDisconnectDocPayload = void;
