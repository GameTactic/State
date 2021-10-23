import SocketDoc from '../../SocketDoc';
import { HistoryEventModules, HistoryEventTeam } from '../../../../history';
import { SubscriberLevel } from '../../types';
import TeamHistorySwitch from '../../../../history/team/switch/TeamHistorySwitch';

export default class TeamSwitchDoc extends SocketDoc {
    public constructor() {
        super({
            title: 'Switch team',
            description: 'Switch to a team',
            module: HistoryEventModules.TEAM,
            event: HistoryEventTeam.SWITCH,
            level: SubscriberLevel.TEAM
        });
    }
}

export type TeamSwitchInDocPayload = {
    history: TeamHistorySwitch;
};

export type TeamSwitchOutDocPayload = {
    history: TeamHistorySwitch;
};
