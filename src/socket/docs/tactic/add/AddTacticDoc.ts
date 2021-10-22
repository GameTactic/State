import SocketDoc from '../../SocketDoc';
import TacticHistoryAdd from '../../../../history/tactic/add/TacticHistoryAdd';
import { TacticData } from '../../../state';
import { HistoryEventModules, HistoryEventTactic } from '../../../../history';
import Tactic from '../../../../tactic/Tactic';
import {SubscriberLevel} from "../../types";

export default class AddTacticDoc extends SocketDoc {
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

export type AddTacticInDocPayload = {
    history: TacticHistoryAdd;
    data: TacticData;
};

export type AddTacticOutDocPayload = {
    history: TacticHistoryAdd;
    data: Tactic;
};
