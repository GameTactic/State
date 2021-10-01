import SocketDoc from '../../types';
import { HistoryEventLifecycle, HistoryEventModules } from '../../../../history';

export default class ConnectionDoc extends SocketDoc {
    public constructor() {
        super({
            title: 'Connect',
            description: 'Connects user to socket',
            module: HistoryEventModules.LIFECYCLE,
            event: HistoryEventLifecycle.CONNECTION,
            overrideEvent: 'join',
            requireRoom: false
        });
    }
}

export type ConnectionDocPayload = void;
