/**
 * This class contains data of an user update event
 * @author Eirmas
 */
import History from '../../History';
import HistoryEvent from '../../HistoryEvent';
import { HistoryEventModules } from '../../types';
import { UserHistoryUpdateOptions } from './types';
import { HistoryEventUser } from '../types';

export default class UserHistoryUpdate extends History {
    /**
     * The ID of the user who was updated
     * @public
     */
    public readonly userId: string

    constructor (options: UserHistoryUpdateOptions) {
        super({
            ...options,
            event: new HistoryEvent({
                module: HistoryEventModules.USER,
                event: HistoryEventUser.UPDATE
            })
        });
        this.userId = options.userId;
    }
}
