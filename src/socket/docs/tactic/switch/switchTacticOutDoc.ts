import SocketDoc, {SocketEventType} from "../../types";
import {TacticData} from "../../../state";
import TacticHistorySwitch from "../../../../history/tactic/switch/TacticHistorySwitch";

export default class SwitchTacticOutDoc implements SocketDoc<SwitchTacticOutPayload> {
    title = 'Switch tactic';
    description = 'User has switched tactic. ';
    event = 'tactic/switch';
    type = SocketEventType.OUT;
}

export type SwitchTacticOutPayload = TacticHistorySwitch | TacticData;
