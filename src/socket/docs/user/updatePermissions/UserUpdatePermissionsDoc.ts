import { HistoryEventModules, HistoryEventUser } from '../../../../history';
import RoomSocketDoc from '../../RoomSocketDoc';
import { SubscriberLevel } from '../../types';
import UserHistoryUpdatePermissions from "../../../../history/user/updatePermissions/UserHistoryUpdatePermissions";

export default class UserUpdatePermissionsDoc extends RoomSocketDoc {
    public constructor() {
        super({
            title: 'Update User Permissions',
            description: 'Updates the users permissions',
            module: HistoryEventModules.USER,
            event: HistoryEventUser.UPDATE_PERMISSIONS,
            level: SubscriberLevel.ROOM,
            requireAuth: true,
            permissionScope: 'moderator'
        });
    }
}

export type UserUpdatePermissionsDocPayload = {
    history: UserHistoryUpdatePermissions;
};
