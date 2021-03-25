import SocketDoc, { SocketEventType } from '../../types';
import TeamHistorySwitch from '../../../../history/team/switch/TeamHistorySwitch';
import { HistoryEventModules, HistoryEventTeam } from '../../../../history';

export default class SwitchTeamDoc implements SocketDoc {
    title = 'Set Current Team Id';
    description = 'Sets the users current team';
    event = `${HistoryEventModules.TEAM}/${HistoryEventTeam.SWITCH}`;
    type = SocketEventType.IN_AND_OUT;
}

export type SwitchTeamDocPayload = {
    history: TeamHistorySwitch;
};
