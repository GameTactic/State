import SocketDoc, { SocketEventType } from '../../types';

export default class ConnectionInDoc implements SocketDoc {
    title = 'Connect';
    description = 'Connects user to socket';
    type = SocketEventType.IN;
    event = 'connection';
}

export type ConnectionInDocPayload = void;
