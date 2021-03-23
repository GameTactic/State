import SocketDoc, { SocketEventType } from '../../types';
import TacticHistoryAdd from '../../../../history/tactic/add/TacticHistoryAdd';

export default class AddTacticDoc implements SocketDoc {
    title = 'Create new tactic';
    description = 'Creates a new tactic';
    event = 'tactic/add';
    type = SocketEventType.IN_AND_OUT;
}

export type AddTacticDocPayload = TacticHistoryAdd;
