import SocketDoc from '../../SocketDoc';
import { HistoryEventLifecycle, HistoryEventModules } from '../../../../history';
import {SubscriberLevel} from "../../types";

export default class DisconnectingDoc extends SocketDoc {
    public constructor() {
        super({
            title: 'Disconnecting',
            description: 'User is disconnecting from socket',
            module: HistoryEventModules.LIFECYCLE,
            event: HistoryEventLifecycle.DISCONNECTING,
            overrideEvent: 'disconnecting',
            level: SubscriberLevel.NONE
        });
    }
}

export type DisconnectingDocPayload = void;
