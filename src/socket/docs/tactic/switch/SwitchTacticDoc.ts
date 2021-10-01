import SocketDoc from '../../types';
import TacticHistorySwitch from '../../../../history/tactic/switch/TacticHistorySwitch';
import { HistoryEventModules, HistoryEventTactic } from '../../../../history';
import { TacticData } from '../../../state';

export default class SwitchTacticDoc extends SocketDoc {
    public constructor() {
        super({
            title: 'Switch tactic',
            description: 'User switches tactic',
            module: HistoryEventModules.TACTIC,
            event: HistoryEventTactic.SWITCH
        });
    }
}

export type SwitchTacticInDocPayload = {
    history: TacticHistorySwitch;
}

export type SwitchTacticOutDocPayload = {
    history: TacticHistorySwitch;
    data?: TacticData;
    newTeamId?: string;
    newViewId?: string;
};
