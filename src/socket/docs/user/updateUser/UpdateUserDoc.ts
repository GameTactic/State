import SocketDoc, { SocketEventType } from '../../types';
import UserHistoryUpdate from '../../../../history/user/update/UserHistoryUpdate';
import User from '../../../../user/User';

export default class UpdateUserDoc implements SocketDoc {
    title = 'Update User';
    description = 'Updates a user.';
    event = 'user/updateUser';
    type = SocketEventType.IN_AND_OUT;
}

export type UpdateUserDocPayload = {
    history: UserHistoryUpdate;
    data: {
        user: User;
    }
};
