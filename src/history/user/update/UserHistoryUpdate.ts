/**
 * This class contains data of an user update event
 * @author Eirmas
 */
import History from '../../History';
import HistoryEvent from '../../HistoryEvent';
import { HistoryEventModules } from '../../types';
import { UserHistoryUpdateOptions } from './types';
import { HistoryEventUser } from '../types';
import { Serialize } from 'serialazy';
import SerializeHelper from '../../../util/SerializeHelper';

@Serialize<UserHistoryUpdateOptions, UserHistoryUpdate>({
    down: ((history: UserHistoryUpdate) => SerializeHelper.toDown(history)),
    up: ((options: UserHistoryUpdateOptions) => new UserHistoryUpdate(options))
})
export default class UserHistoryUpdate extends History {
    /**
     * The ID of the user who was updated
     * @private
     */
    private readonly _userId: string

    constructor (options: UserHistoryUpdateOptions) {
        super({
            ...options,
            event: new HistoryEvent({
                module: HistoryEventModules.USER,
                event: HistoryEventUser.UPDATE
            })
        });
        this._userId = options.userId;
    }

    /**
     * Returns the ID of the user who was update
     * @returns userId: string
     */
    get userId (): string {
        return this._userId;
    }
}
