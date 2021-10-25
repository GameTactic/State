import SocketDoc from '../../SocketDoc';
import { HistoryEventModules, HistoryEventView } from '../../../../history';
import { SubscriberLevel } from '../../types';
import ViewHistoryDisconnect from '../../../../history/view/disconnect/ViewHistoryDisconnect';

export default class ViewDisconnectDoc extends SocketDoc {
    public constructor() {
        super({
            title: 'Disconnect view',
            description: 'Disconnect from a view',
            module: HistoryEventModules.VIEW,
            event: HistoryEventView.DISCONNECT,
            level: SubscriberLevel.VIEW
        });
    }
}

export type ViewDisconnectInDocPayload = void;

export type ViewDisconnectOutDocPayload = {
    history: ViewHistoryDisconnect;
};
