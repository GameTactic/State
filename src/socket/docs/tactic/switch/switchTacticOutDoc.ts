import SocketDoc, { SocketEventType } from '../../types';
import { TacticData } from '../../../state';
import TacticHistorySwitch from '../../../../history/tactic/switch/TacticHistorySwitch';
import { HistoryEventModules, HistoryEventTactic } from '../../../../history';

export default class SwitchTacticOutDoc implements SocketDoc {
    title = 'Switch tactic';
    description = 'User has switched tactic. ';
    event = `${HistoryEventModules.TACTIC}/${HistoryEventTactic.SWITCH}`;
    type = SocketEventType.OUT;
}

export type SwitchTacticOutDocPayload = {
    history: TacticHistorySwitch;
    data?: TacticData;
    newTeamId?: string;
    newViewId?: string;
};
