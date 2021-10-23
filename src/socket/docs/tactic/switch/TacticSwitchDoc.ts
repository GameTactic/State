import SocketDoc from '../../SocketDoc';
import { TacticData } from '../../../state';
import { HistoryEventModules, HistoryEventTactic } from '../../../../history';
import { SubscriberLevel } from '../../types';
import TacticHistorySwitch from '../../../../history/tactic/switch/TacticHistorySwitch';

export default class TacticSwitchDoc extends SocketDoc {
    public constructor() {
        super({
            title: 'Switch tactic',
            description: 'Switch to a tactic',
            module: HistoryEventModules.TACTIC,
            event: HistoryEventTactic.SWITCH,
            level: SubscriberLevel.TACTIC
        });
    }
}

export type TacticSwitchInDocPayload = {
    history: TacticHistorySwitch;
};

export type TacticSwitchOutDocPayload = {
    history: TacticHistorySwitch;
    data: TacticData;
};
