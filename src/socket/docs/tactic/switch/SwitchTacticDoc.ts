import SocketDoc from '../../SocketDoc';
import TacticHistorySwitch from '../../../../history/tactic/switch/TacticHistorySwitch';
import { HistoryEventModules, HistoryEventTactic } from '../../../../history';
import { TacticData } from '../../../state';
import {SubscriberLevel} from "../../types";

export default class SwitchTacticDoc extends SocketDoc {
    public constructor() {
        super({
            title: 'Switch tactic',
            description: 'User switches tactic',
            module: HistoryEventModules.TACTIC,
            event: HistoryEventTactic.SWITCH,
            level: SubscriberLevel.ROOM
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
