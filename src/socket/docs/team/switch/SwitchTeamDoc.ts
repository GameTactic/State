import SocketDoc, { SocketEventType } from '../../types';
import TeamHistorySwitch from '../../../../history/team/switch/TeamHistorySwitch';

export default class SwitchTeamDoc implements SocketDoc {
    title = 'Set Current Team Id';
    description = 'Sets the users current team';
    event = 'team/switch';
    type = SocketEventType.IN_AND_OUT;
}

export type SwitchTeamDocPayload = {
    history: TeamHistorySwitch;
};
