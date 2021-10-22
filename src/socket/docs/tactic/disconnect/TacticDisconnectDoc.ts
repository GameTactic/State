import SocketDoc from '../../SocketDoc';
import { HistoryEventModules, HistoryEventTactic } from '../../../../history';
import { SubscriberLevel } from '../../types';
import TacticHistoryDisconnect from '../../../../history/tactic/disconnect/TacticHistoryDisconnect';

export default class TacticDisconnectDoc extends SocketDoc {
    public constructor() {
        super({
            title: 'Disconnect tactic',
            description: 'Disconnect from a tactic',
            module: HistoryEventModules.TACTIC,
            event: HistoryEventTactic.DISCONNECT,
            level: SubscriberLevel.TACTIC
        });
    }
}

export type TacticDisconnectInDocPayload = void;

export type TacticDisconnectOutDocPayload = {
    history: TacticHistoryDisconnect;
};
