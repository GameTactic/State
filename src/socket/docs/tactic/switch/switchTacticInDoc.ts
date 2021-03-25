import SocketDoc, { SocketEventType } from '../../types';
import TacticHistorySwitch from '../../../../history/tactic/switch/TacticHistorySwitch';
import { HistoryEventModules, HistoryEventTactic } from '../../../../history';

export default class SwitchTacticInDoc implements SocketDoc {
    title = 'Switch tactic';
    description = 'User switches tactic';
    event = `${HistoryEventModules.TACTIC}/${HistoryEventTactic.SWITCH}`;
    type = SocketEventType.IN;
}

export type SwitchTacticInDocPayload = {
    history: TacticHistorySwitch;
}
