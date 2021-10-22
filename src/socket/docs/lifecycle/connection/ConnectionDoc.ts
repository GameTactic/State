import SocketDoc from '../../SocketDoc';
import { HistoryEventLifecycle, HistoryEventModules } from '../../../../history';
import {SubscriberLevel} from "../../types";

export default class ConnectionDoc extends SocketDoc {
    public constructor() {
        super({
            title: 'Connect',
            description: 'Connects user to socket',
            module: HistoryEventModules.LIFECYCLE,
            event: HistoryEventLifecycle.CONNECTION,
            overrideEvent: 'connection',
            level: SubscriberLevel.NONE
        });
    }
}

export type ConnectionDocPayload = void;
