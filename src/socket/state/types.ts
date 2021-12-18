import RootCollection from '../../tactic/collection/RootCollection';
import User from '../../user/User';
import Room from '../../room/Room';
import Tactic from '../../tactic/Tactic';
import Team from '../../team/Team';
import CanvasElement from '../../canvas/elements/abstract/CanvasElement';
import Map from '../../canvas/map/Map';
import Message from '../../misc/message/Message';
import {UserPermission} from "../../user";

export interface SocketStateOptions {
    collection: RootCollection;
    users: Record<string, Pick<User, 'id' | 'permissions'>>;
    tactics: Record<string, TacticData>;
    room: Room;
    chat: Array<Message>;
    tokens: Partial<Record<UserPermission, string>>;
    [key: string]: any;
}

export interface TacticData {
    tactic: Tactic;
    teams: Record<string, Team>;
    elements: Record<string, CanvasElement>;
    map: Map;
}

export interface CreateTacticData {
    tactic: Omit<Tactic, 'id' | 'creatorId'>;
    teams: Record<string, Team>;
    map: Map;
}

export interface PartialState {
    room: Room;
    collection: RootCollection;
    tactics: Record<string, Tactic>;
    chat: Array<Message>;
    map?: Map;
    elements?: Record<string, CanvasElement>;
    teams?: Record<string, Team>;
}
