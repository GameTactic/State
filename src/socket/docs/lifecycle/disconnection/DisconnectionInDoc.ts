import SocketDoc, {SocketEventType} from "../../types";

export default class DisconnectionInDoc implements SocketDoc<DisconnectionInDocPayload> {
    title = 'Disconnect';
    description = 'Disconnects user from socket';
    type = SocketEventType.IN_AND_OUT;
    event = 'disconnect';
}

export type DisconnectionInDocPayload = void;
