import SocketDoc, { SocketEventType } from '../../types';

export default class DisconnectionInDoc implements SocketDoc {
    title = 'Disconnect';
    description = 'Disconnects user from socket';
    type = SocketEventType.IN_AND_OUT;
    event = 'disconnect'; // Reserved event
}

export type DisconnectionInDocPayload = void;
