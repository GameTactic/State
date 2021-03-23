import SocketDoc, {SocketEventType} from "../../types";
import TacticHistoryAdd from "../../../../history/tactic/add/TacticHistoryAdd";

export default class AddTacticInDoc implements SocketDoc<AddTacticInDocPayload> {
    title = 'Create new tactic';
    description = 'Creates a new tactic';
    event = 'tactic/add';
    type = SocketEventType.IN;
}

export type AddTacticInDocPayload = TacticHistoryAdd;
