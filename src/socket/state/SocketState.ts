import { SocketStateOptions, TacticData } from './types';
import RootCollection from '../../tactic/collection/RootCollection';
import User from '../../user/User';
import Room from '../../room/Room';
import Message from '../../misc/message/Message';
import { UserPermission } from '../../user';

export default class SocketState {
    public collection: RootCollection;
    public users: Record<string, Pick<User, 'id' | 'permissions'>>;
    public tactics: Record<string, TacticData>;
    public room: Room;
    public chat: Array<Message>;
    public tokens: Record<UserPermission, string>;

    constructor(options: SocketStateOptions) {
        this.collection = options.collection;
        this.users = options.users;
        this.tactics = options.tactics;
        this.room = options.room;
        this.chat = options.chat;
        this.tokens = options.tokens;
    }
}
