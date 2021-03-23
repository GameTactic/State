import SocketDoc, {SocketEventType} from "../../types";
import TeamHistorySwitch from "../../../../history/team/switch/TeamHistorySwitch";

export default class SetCurrentTeamDoc implements SocketDoc<SetCurrentTeamDocPayload> {
    title = 'Set Current Team Id';
    description = 'Sets the users current team';
    event = 'team/setCurrentTeamId';
    type = SocketEventType.IN_AND_OUT;
}

export type SetCurrentTeamDocPayload = TeamHistorySwitch;
