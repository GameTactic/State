import RootCollection from '../../tactic/collection/RootCollection';
import User from '../../user/User';
import { Room } from '../../room';
import Tactic from '../../tactic/Tactic';
import Team from '../../team/Team';
import CanvasElement from '../../canvas/elements/abstract/CanvasElement';
import Map from '../../canvas/map/Map';
import History from '../../history/History';

export interface SocketStateOptions {
    collection: RootCollection;
    users: { [jti: string]: User };
    tactics: { [id: string]: TacticData }
    history: { [id: string]: History }
    room: Room
    [key: string]: any
}

export interface TacticData {
    tactic: Tactic;
    teams: { [id: string]: Team }
    elements: { [id: string]: CanvasElement }
    map: Map;
}

export interface PartialState {
    room: Room,
    collection: RootCollection,
    users: { [jti: string]: User },
    history: { [id: string]: History },
    tactics: { [id: string]: Tactic }
}
