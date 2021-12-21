import { SocketStateOptions, TacticData } from './types';
import RootCollection from '../../tactic/collection/RootCollection';
import Room from '../../room/Room';
import Message from '../../misc/message/Message';
import { UserPermission } from '../../user';

export default class SocketState {
    public collection: RootCollection;
    public tactics: Record<string, TacticData>;
    public room: Room;
    public chat: Array<Message>;
    public tokens: Partial<Record<UserPermission, string>>;

    constructor(options: SocketStateOptions) {
        this.collection = options.collection;
        this.tactics = options.tactics;
        this.room = options.room;
        this.chat = options.chat;
        this.tokens = options.tokens;
    }
}
