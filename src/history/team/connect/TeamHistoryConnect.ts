import { TeamHistoryConnectOptions } from './types';
import History from '../../History';
import HistoryEvent from '../../HistoryEvent';
import { HistoryEventModules } from '../../types';
import { HistoryEventTeam } from '../types';

/**
 * This class contains data of an team connect event
 * @author Eirmas
 */
export default class TeamHistoryConnect extends History {
    /**
     * The ID of the user who joined the team
     * @public
     */
    public readonly userId: string

    /**
     * The ID of the team the user joined
     */
    public readonly teamId: string

    constructor (options: TeamHistoryConnectOptions) {
        super({
            ...options,
            event: new HistoryEvent({
                module: HistoryEventModules.TEAM,
                event: HistoryEventTeam.CONNECT
            })
        });
        this.userId = options.userId;
        this.teamId = options.teamId;
    }
}
