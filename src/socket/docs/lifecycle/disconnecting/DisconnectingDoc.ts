import SocketDoc from '../../types';
import { HistoryEventLifecycle, HistoryEventModules } from '../../../../history';

export default class DisconnectingDoc extends SocketDoc {
    public constructor() {
        super({
            title: 'Disconnecting',
            description: 'User is disconnecting from socket',
            module: HistoryEventModules.LIFECYCLE,
            event: HistoryEventLifecycle.DISCONNECTING,
            overrideEvent: 'disconnecting',
            requireRoom: false
        });
    }
}

export type DisconnectingDocPayload = void;
