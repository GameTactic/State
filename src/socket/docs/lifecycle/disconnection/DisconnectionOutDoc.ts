import SocketDoc, { SocketEventType } from '../../types';
import LifecycleHistoryDisconnection from '../../../../history/lifecycle/disconnection/LifecycleHistoryDisconnection';
import { HistoryEventLifecycle, HistoryEventModules } from '../../../../history';

export default class DisconnectionOutDoc implements SocketDoc {
    title = 'Disconnect';
    description = 'Disconnects user from socket';
    type = SocketEventType.IN_AND_OUT;
    event = `${HistoryEventModules.LIFECYCLE}/${HistoryEventLifecycle.DISCONNECTION}`;
}

export type DisconnectionOutDocPayload = {
    history: LifecycleHistoryDisconnection;
};
