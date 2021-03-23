import SocketDoc, { SocketEventType } from "../../types";
import LifecycleHistoryConnection from "../../../../history/lifecycle/connection/LifecycleHistoryConnection";
import {PartialState} from "../../../state";

export default class ConnectionOutDoc implements SocketDoc<ConnectionDocOutPayload> {
    title = 'Connect';
    description = 'Connects user to socket';
    type = SocketEventType.OUT;
    event = 'connection';
}

export type ConnectionDocOutPayload = LifecycleHistoryConnection | PartialState;