import RoomSocketDoc from '../../RoomSocketDoc';
import { TacticData } from '../../../state';
import { HistoryEventModules, HistoryEventTactic } from '../../../../history';
import { SubscriberLevel } from '../../types';
import TacticHistoryConnect from '../../../../history/tactic/connect/TacticHistoryConnect';

export default class TacticConnectDoc extends RoomSocketDoc {
    public constructor() {
        super({
            title: 'Connect tactic',
            description: 'Connect to a tactic',
            module: HistoryEventModules.TACTIC,
            event: HistoryEventTactic.CONNECT,
            level: SubscriberLevel.TACTIC,
            requireAuth: false
        });
    }
}

export type TacticConnectInDocPayload = {
    history: TacticHistoryConnect;
};

export type TacticConnectOutDocPayload = {
    history: TacticHistoryConnect;
    data: TacticData;
};
