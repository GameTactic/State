import { HistoryEventModules, HistoryEventUser } from '../../../../history';
import RoomSocketDoc from '../../RoomSocketDoc';
import { SubscriberLevel } from '../../types';
import UserHistoryShare from "../../../../history/user/share/UserHistoryShare";

export default class UserShareDoc extends RoomSocketDoc {
    public constructor() {
        super({
            title: 'Share User',
            description: 'Shares user with others',
            module: HistoryEventModules.USER,
            event: HistoryEventUser.SHARE,
            level: SubscriberLevel.ROOM,
            requireAuth: false
        });
    }
}

export type UserShareDocPayload = {
    history: UserHistoryShare;
};
