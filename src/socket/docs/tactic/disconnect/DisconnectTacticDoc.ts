import SocketDoc from '../../SocketDoc';
import { TacticData } from '../../../state';
import { HistoryEventModules, HistoryEventTactic } from '../../../../history';
import Tactic from '../../../../tactic/Tactic';
import { SubscriberLevel } from '../../types';
import TacticHistoryDisconnect from '../../../../history/tactic/disconnect/TacticHistoryDisconnect';

export default class DisconnectTacticDoc extends SocketDoc {
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

export type DisconnectTacticInDocPayload = {
    history: TacticHistoryDisconnect;
    data: TacticData;
};

export type DisconnectTacticOutDocPayload = {
    history: TacticHistoryDisconnect;
    data: Tactic;
};
