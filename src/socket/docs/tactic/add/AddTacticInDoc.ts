import SocketDoc, { SocketEventType } from '../../types';
import TacticHistoryAdd from '../../../../history/tactic/add/TacticHistoryAdd';
import { TacticData } from '../../../state';

export default class AddTacticInDoc implements SocketDoc {
    title = 'Create new tactic';
    description = 'Creates a new tactic';
    event = 'tactic/add';
    type = SocketEventType.IN;
}

export type AddTacticInDocPayload = {
    history: TacticHistoryAdd;
    data: TacticData;
};
