import SocketDoc from '../../SocketDoc';
import { HistoryEventLifecycle, HistoryEventModules } from '../../../../history';
import { SubscriberLevel } from '../../types';

export default class LifecycleUpdateTokensDoc extends SocketDoc {
    public constructor() {
        super({
            title: 'Update tokens',
            description: 'Updates the clients tokens in socket',
            module: HistoryEventModules.LIFECYCLE,
            event: HistoryEventLifecycle.UPDATE_TOKENS,
            level: SubscriberLevel.NONE,
            requireAuth: false
        });
    }
}

export type LifecycleUpdateTokensDocPayload = {
    idToken: string;
    accessToken: string;
};
