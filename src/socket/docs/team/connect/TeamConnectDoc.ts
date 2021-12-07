import RoomSocketDoc from '../../RoomSocketDoc';
import { HistoryEventModules, HistoryEventTeam } from '../../../../history';
import { SubscriberLevel } from '../../types';
import TeamHistoryConnect from '../../../../history/team/connect/TeamHistoryConnect';

export default class TeamConnectDoc extends RoomSocketDoc {
    public constructor() {
        super({
            title: 'Connect team',
            description: 'Connect to a team',
            module: HistoryEventModules.TEAM,
            event: HistoryEventTeam.CONNECT,
            level: SubscriberLevel.TEAM,
            requireAuth: false
        });
    }
}

export type TeamConnectInDocPayload = {
    history: TeamHistoryConnect;
};

export type TeamConnectOutDocPayload = {
    history: TeamHistoryConnect;
};
