import SocketDoc, { SocketEventType } from '../../types';
import UserHistoryUpdate from '../../../../history/user/update/UserHistoryUpdate';

export default class UpdateUserDoc implements SocketDoc {
    title = 'Update User';
    description = 'Updates a user.';
    event = 'user/updateUser';
    type = SocketEventType.IN_AND_OUT;
}

export type UpdateUserDocPayload = UserHistoryUpdate;
