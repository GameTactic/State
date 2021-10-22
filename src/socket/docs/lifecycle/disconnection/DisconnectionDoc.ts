import SocketDoc from '../../SocketDoc';
import { HistoryEventLifecycle, HistoryEventModules } from '../../../../history';
import {SubscriberLevel} from "../../types";

export default class DisconnectionDoc extends SocketDoc {
    public constructor() {
        super({
            title: 'Disconnect',
            description: 'Disconnects user from socket',
            module: HistoryEventModules.LIFECYCLE,
            event: HistoryEventLifecycle.DISCONNECTION,
            overrideEvent: 'disconnect',
            level: SubscriberLevel.NONE
        });
    }
}

export type DisconnectionDocPayload = void;
