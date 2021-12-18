import { HistoryEventModules, HistoryEventUser } from '../../../../history';
import RoomSocketDoc from '../../RoomSocketDoc';
import { SubscriberLevel } from '../../types';
import UserHistoryPresentation from "../../../../history/user/presentation/UserHistoryPresentation";

export default class UserPresentationDoc extends RoomSocketDoc {
    public constructor() {
        super({
            title: 'User Presentation',
            description: 'Sets user presentation mode',
            module: HistoryEventModules.USER,
            event: HistoryEventUser.SET_PRESENTATION,
            level: SubscriberLevel.ROOM,
            requireAuth: true,
            permissionScope: 'presenter'
        });
    }
}

export type UserPresentationDocPayload = {
    history: UserHistoryPresentation;
};
