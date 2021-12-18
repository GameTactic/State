/**
 * This class contains data of an user share event
 * @author Eirik Måseidvåg
 */
import History from '../../History';
import HistoryEvent from '../../HistoryEvent';
import { HistoryEventModules } from '../../types';
import { UserHistoryShareOptions } from './types';
import { HistoryEventUser } from '../types';
import User from "../../../user/User";

export default class UserHistoryShare extends History {
    /**
     * The ID of the user to share user object to
     * @public
     */
    public readonly targetUserId: string

    /**
     * The user object to share with target
     */
    public readonly user: User;

    constructor (options: UserHistoryShareOptions) {
        super({
            ...options,
            event: new HistoryEvent({
                module: HistoryEventModules.USER,
                event: HistoryEventUser.SHARE
            })
        });
        this.targetUserId = options.targetUserId;
        this.user = options.user;
    }
}
