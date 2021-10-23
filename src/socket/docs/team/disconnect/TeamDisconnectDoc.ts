import SocketDoc from '../../SocketDoc';
import { HistoryEventModules, HistoryEventTeam } from '../../../../history';
import { SubscriberLevel } from '../../types';
import TeamHistoryDisconnect from '../../../../history/team/disconnect/TeamHistoryDisconnect';

export default class TeamDisconnectDoc extends SocketDoc {
    public constructor() {
        super({
            title: 'Disconnect team',
            description: 'Disconnect from a team',
            module: HistoryEventModules.TEAM,
            event: HistoryEventTeam.DISCONNECT,
            level: SubscriberLevel.TEAM
        });
    }
}

export type TeamDisconnectInDocPayload = void;

export type TeamDisconnectOutDocPayload = {
    history: TeamHistoryDisconnect;
};
