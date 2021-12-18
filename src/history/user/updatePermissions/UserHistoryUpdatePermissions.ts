/**
 * This class contains data of an user update permissions event
 * @author Eirik Måseidvåg
 */
import History from '../../History';
import HistoryEvent from '../../HistoryEvent';
import { HistoryEventModules } from '../../types';
import { UserHistoryUpdatePermissionsOptions } from './types';
import { HistoryEventUser } from '../types';
import {UserPermission} from "../../../user";

export default class UserHistoryUpdatePermissions extends History {
    /**
     * The ID of the user who was updated
     * @public
     */
    public readonly userId: string

    /**
     * The new user permissions
     * @public
     */
    public readonly permissions: Array<UserPermission>

    constructor (options: UserHistoryUpdatePermissionsOptions) {
        super({
            ...options,
            event: new HistoryEvent({
                module: HistoryEventModules.USER,
                event: HistoryEventUser.UPDATE_PERMISSIONS
            })
        });
        this.userId = options.userId;
        this.permissions = options.permissions;
    }
}
