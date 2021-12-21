/**
 * This class contains data of an user update event
 * @author Eirik Måseidvåg
 */
import History from '../../History';
import HistoryEvent from '../../HistoryEvent';
import { HistoryEventModules } from '../../types';
import { UserHistoryUpdateOptions } from './types';
import { HistoryEventUser } from '../types';
import User from '../../../user/User';

export default class UserHistoryUpdate extends History {
    /**
     * The ID of the user who was updated
     * @public
     */
    public readonly userId: string

    /**
     * The user changes
     */
    public readonly changes: Partial<Pick<User, 'name'>>;

    constructor (options: UserHistoryUpdateOptions) {
        super({
            ...options,
            event: new HistoryEvent({
                module: HistoryEventModules.USER,
                event: HistoryEventUser.UPDATE
            })
        });
        this.userId = options.userId;
        this.changes = options.changes;
    }
}
