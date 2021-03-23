import RootCollection from '../../tactic/collection/RootCollection';
import User from '../../user/User';
import { Room } from '../../room';
import Tactic from '../../tactic/Tactic';
import Team from '../../team/Team';
import CanvasElement from '../../canvas/elements/abstract/CanvasElement';
import Map from '../../canvas/map/Map';
import History from '../../history/History';

export interface SocketState {
    collection: RootCollection;
    users: { [key: string]: User };
    tactics: { [key: string]: TacticData }
    history: { [key: string]: History }
    room: Room
}

export interface TacticData {
    tactic: Tactic;
    teams: { [key: string]: Team }
    elements: { [key: string]: CanvasElement }
    map: Map;
}

export interface PartialState {
    room: Room,
    collection: RootCollection,
    users: { [key: string]: User },
    history: { [key: string]: History },
    tactics: { [key: string]: Tactic }
}
