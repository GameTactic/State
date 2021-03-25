import SocketDoc, { SocketEventType } from '../../types';
import LifecycleHistoryConnection from '../../../../history/lifecycle/connection/LifecycleHistoryConnection';
import { PartialState } from '../../../state';
import User from '../../../../user/User';

export default class ConnectionOutDoc implements SocketDoc {
    title = 'Connect';
    description = 'Connects user to socket';
    type = SocketEventType.OUT;
    event = 'connection';
}

export type ConnectionOutDocPayload = {
    history: LifecycleHistoryConnection;
    data: {
        user: User;
        state?: PartialState;
    };
};
