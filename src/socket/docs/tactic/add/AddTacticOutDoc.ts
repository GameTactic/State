import SocketDoc, { SocketEventType } from '../../types';
import TacticHistoryAdd from '../../../../history/tactic/add/TacticHistoryAdd';
import Tactic from '../../../../tactic/Tactic';

export default class AddTacticOutDoc implements SocketDoc {
    title = 'Create new tactic';
    description = 'Creates a new tactic';
    event = 'tactic/add';
    type = SocketEventType.OUT;
}

export type AddTacticOutDocPayload = {
    history: TacticHistoryAdd;
    data: Tactic;
};
