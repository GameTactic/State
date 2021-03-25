import { SocketStateOptions, TacticData } from './types';
import RootCollection from '../../tactic/collection/RootCollection';
import User from '../../user/User';
import History from '../../history/History';
import { Room } from '../../room';
import { Serialize } from 'serialazy';
import SerializeHelper from '../../util/SerializeHelper';

@Serialize<SocketStateOptions, SocketState>({
    down: (state: SocketState) => (SerializeHelper.toDown(state)),
    up: (options: SocketStateOptions) => Object.assign(new SocketState(options))
})
export default class SocketState {
    public collection: RootCollection;
    public users: { [jti: string]: User };
    public tactics: { [tacticId: string]: TacticData }
    public history: { [historyId: string]: History }
    public room: Room

    constructor(options: SocketStateOptions) {
        this.collection = options.collection;
        this.users = options.users;
        this.tactics = options.tactics;
        this.history = options.history;
        this.room = options.room;
    }
}
