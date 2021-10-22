import SocketDoc from '../../SocketDoc';
import TacticHistoryAdd from '../../../../history/tactic/add/TacticHistoryAdd';
import { TacticData } from '../../../state';
import { HistoryEventModules, HistoryEventTactic } from '../../../../history';
import Tactic from '../../../../tactic/Tactic';
import { SubscriberLevel } from '../../types';

export default class TacticAddDoc extends SocketDoc {
    public constructor() {
        super({
            title: 'Create new tactic',
            description: 'Creates a new tactic',
            module: HistoryEventModules.TACTIC,
            event: HistoryEventTactic.ADD,
            level: SubscriberLevel.ROOM
        });
    }
}

export type TacticAddInDocPayload = {
    history: TacticHistoryAdd;
    data: TacticData;
};

export type TacticAddOutDocPayload = {
    history: TacticHistoryAdd;
    data: Tactic;
};
