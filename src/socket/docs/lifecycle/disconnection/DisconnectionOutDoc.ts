import SocketDoc, { SocketEventType } from '../../types';
import LifecycleHistoryDisconnection from '../../../../history/lifecycle/disconnection/LifecycleHistoryDisconnection';

export default class DisconnectionOutDoc implements SocketDoc {
    title = 'Disconnect';
    description = 'Disconnects user from socket';
    type = SocketEventType.IN_AND_OUT;
    event = 'disconnect';
}

export type DisconnectionOutDocPayload = LifecycleHistoryDisconnection;
