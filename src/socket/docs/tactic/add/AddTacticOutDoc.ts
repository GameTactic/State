import SocketDoc, { SocketEventType } from '../../types';
import TacticHistoryAdd from '../../../../history/tactic/add/TacticHistoryAdd';
import Tactic from '../../../../tactic/Tactic';
import { HistoryEventModules, HistoryEventTactic } from '../../../../history';

export default class AddTacticOutDoc implements SocketDoc {
    title = 'Create new tactic';
    description = 'Creates a new tactic';
    event = `${HistoryEventModules.TACTIC}/${HistoryEventTactic.ADD}`;
    type = SocketEventType.OUT;
}

export type AddTacticOutDocPayload = {
    history: TacticHistoryAdd;
    data: Tactic;
};
