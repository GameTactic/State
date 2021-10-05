import RootCollection from '../../tactic/collection/RootCollection';
import User from '../../user/User';
import Room from '../../room/Room';
import Tactic from '../../tactic/Tactic';
import Team from '../../team/Team';
import CanvasElement from '../../canvas/elements/abstract/CanvasElement';
import Map from '../../canvas/map/Map';
import Message from '../../misc/message/Message';

export interface SocketStateOptions {
    collection: RootCollection;
    users: { [jti: string]: User };
    tactics: { [id: string]: TacticData };
    room: Room;
    chat: Array<Message>
    [key: string]: any;
}

export interface TacticData {
    tactic: Tactic;
    teams: { [id: string]: Team };
    elements: { [id: string]: CanvasElement };
    map: Map;
}

export interface PartialState {
    room: Room;
    collection: RootCollection;
    users: { [jti: string]: User };
    tactics: { [id: string]: Tactic };
    chat: Array<Message>;
    map?: Map;
    elements?: { [id: string]: CanvasElement };
    teams?: { [id: string]: Team };
}
