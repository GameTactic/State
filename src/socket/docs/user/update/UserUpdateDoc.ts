import UserHistoryUpdate from '../../../../history/user/update/UserHistoryUpdate';
import User from '../../../../user/User';
import { HistoryEventModules, HistoryEventUser } from '../../../../history';
import RoomSocketDoc from '../../RoomSocketDoc';
import { SubscriberLevel } from '../../types';

export default class UserUpdateDoc extends RoomSocketDoc {
    public constructor() {
        super({
            title: 'Update User',
            description: 'Updates a user',
            module: HistoryEventModules.USER,
            event: HistoryEventUser.UPDATE,
            level: SubscriberLevel.ROOM,
            requireAuth: true,
            permissionScope: 'owner' // TODO
        });
    }
}

export type UserUpdateDocPayload = {
    history: UserHistoryUpdate;
    data: {
        user: User;
    }
};
