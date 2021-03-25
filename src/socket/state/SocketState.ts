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
    private _collection: RootCollection;
    private _users: { [jti: string]: User };
    private _tactics: { [tacticId: string]: TacticData }
    private _history: { [historyId: string]: History }
    private _room: Room

    constructor(options: SocketStateOptions) {
        this._collection = options.collection;
        this._users = options.users;
        this._tactics = options.tactics;
        this._history = options.history;
        this._room = options.room;
    }

    get collection(): RootCollection {
        return this._collection;
    }

    set collection(value: RootCollection) {
        this._collection = value;
    }

    get users(): { [jti: string]: User } {
        return this._users;
    }

    set users(value: { [jti: string]: User }) {
        this._users = value;
    }

    get tactics(): { [tacticId: string]: TacticData } {
        return this._tactics;
    }

    set tactics(value: { [tacticId: string]: TacticData }) {
        this._tactics = value;
    }

    get history(): { [historyId: string]: History } {
        return this._history;
    }

    set history(value: { [historyId: string]: History }) {
        this._history = value;
    }

    get room(): Room {
        return this._room;
    }

    set room(value: Room) {
        this._room = value;
    }
}
