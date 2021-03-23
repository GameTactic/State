import SocketDoc, {SocketEventType} from "../../types";
import {TacticData} from "../../../state";
import TacticHistoryAdd from "../../../../history/tactic/add/TacticHistoryAdd";

export default class AddTacticOutDoc implements SocketDoc<TacticHistoryAdd> {
    title = 'New tactic created';
    description = 'New tactic has been created.';
    event = 'tactic/add';
    type = SocketEventType.OUT;
}

export type AddTacticOutDocPayload = TacticHistoryAdd | TacticData;
