import RoomSocketDoc from '../../RoomSocketDoc';
import { HistoryEventModules, HistoryEventView } from '../../../../history';
import { SubscriberLevel } from '../../types';
import ViewHistoryConnect from '../../../../history/view/connect/ViewHistoryConnect';

export default class ViewConnectDoc extends RoomSocketDoc {
    public constructor() {
        super({
            title: 'Connect view',
            description: 'Connect to a view',
            module: HistoryEventModules.VIEW,
            event: HistoryEventView.CONNECT,
            level: SubscriberLevel.VIEW,
            requireAuth: false
        });
    }
}

export type ViewConnectInDocPayload = {
    history: ViewHistoryConnect;
};

export type ViewConnectOutDocPayload = {
    history: ViewHistoryConnect;
};
