import SocketDoc from '../../SocketDoc';
import { HistoryEventModules, HistoryEventTeam } from '../../../../history';
import { SubscriberLevel } from '../../types';
import TeamHistoryConnect from '../../../../history/team/connect/TeamHistoryConnect';

export default class TeamConnectDoc extends SocketDoc {
    public constructor() {
        super({
            title: 'Connect team',
            description: 'Connect to a team',
            module: HistoryEventModules.TEAM,
            event: HistoryEventTeam.CONNECT,
            level: SubscriberLevel.TEAM
        });
    }
}

export type TeamConnectInDocPayload = {
    history: TeamHistoryConnect;
};

export type TeamConnectOutDocPayload = {
    history: TeamHistoryConnect;
};
