import SocketDoc, { SocketEventType } from "../../types";
import TacticHistorySwitch from "../../../../history/tactic/switch/TacticHistorySwitch";

export default class SwitchTacticInDoc implements SocketDoc<SwitchTacticInPayload> {
    title = 'Switch tactic';
    description = 'User switches tactic';
    event = 'tactic/switch';
    type = SocketEventType.IN;
}

export type SwitchTacticInPayload = TacticHistorySwitch
