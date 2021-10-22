import SocketDoc from '../../SocketDoc';
import { TacticData } from '../../../state';
import { HistoryEventModules, HistoryEventTactic } from '../../../../history';
import Tactic from '../../../../tactic/Tactic';
import { SubscriberLevel } from '../../types';
import TacticHistoryConnect from '../../../../history/tactic/connect/TacticHistoryConnect';

export default class ConnectTacticDoc extends SocketDoc {
    public constructor() {
        super({
            title: 'Connect tactic',
            description: 'Connect to a tactic',
            module: HistoryEventModules.TACTIC,
            event: HistoryEventTactic.CONNECT,
            level: SubscriberLevel.TACTIC
        });
    }
}

export type ConnectTacticInDocPayload = {
    history: TacticHistoryConnect;
    data: TacticData;
};

export type ConnectTacticOutDocPayload = {
    history: TacticHistoryConnect;
    data: Tactic;
};
