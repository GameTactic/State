import SocketDoc from '../../types';
import UserHistoryUpdate from '../../../../history/user/update/UserHistoryUpdate';
import User from '../../../../user/User';
import { HistoryEventModules, HistoryEventUser } from '../../../../history';

export default class UpdateUserDoc extends SocketDoc {
    public constructor() {
        super({
            title: 'Update User',
            description: 'Updates a user',
            module: HistoryEventModules.USER,
            event: HistoryEventUser.UPDATE
        });
    }
}

export type UpdateUserDocPayload = {
    history: UserHistoryUpdate;
    data: {
        user: User;
    }
};
