import { SocketStateOptions, TacticData } from './types';
import RootCollection from '../../tactic/collection/RootCollection';
import User from '../../user/User';
import { Room } from '../../room';

export default class SocketState {
    public collection: RootCollection;
    public users: { [jti: string]: User };
    public tactics: { [tacticId: string]: TacticData }
    public room: Room

    constructor(options: SocketStateOptions) {
        this.collection = options.collection;
        this.users = options.users;
        this.tactics = options.tactics;
        this.room = options.room;
    }
}
