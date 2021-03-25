import SocketDoc, { SocketEventType } from '../../types';
import TacticHistoryAdd from '../../../../history/tactic/add/TacticHistoryAdd';
import { TacticData } from '../../../state';
import { HistoryEventModules, HistoryEventTactic } from '../../../../history';

export default class AddTacticInDoc implements SocketDoc {
    title = 'Create new tactic';
    description = 'Creates a new tactic';
    event = `${HistoryEventModules.TACTIC}/${HistoryEventTactic.ADD}`;
    type = SocketEventType.IN;
}

export type AddTacticInDocPayload = {
    history: TacticHistoryAdd;
    data: TacticData;
};
