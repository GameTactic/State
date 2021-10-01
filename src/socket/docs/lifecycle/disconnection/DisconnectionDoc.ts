import SocketDoc from '../../types';
import { HistoryEventLifecycle, HistoryEventModules } from '../../../../history';

export default class DisconnectionDoc extends SocketDoc {
    public constructor() {
        super({
            title: 'Disconnect',
            description: 'Disconnects user from socket',
            module: HistoryEventModules.LIFECYCLE,
            event: HistoryEventLifecycle.DISCONNECTION,
            overrideEvent: 'disconnect',
            requireRoom: false
        });
    }
}

export type DisconnectionDocPayload = void;
