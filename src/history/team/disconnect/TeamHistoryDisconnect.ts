import { TeamHistoryDisconnectOptions } from './types';
import History from '../../History';
import HistoryEvent from '../../HistoryEvent';
import { HistoryEventModules } from '../../types';
import { HistoryEventTeam } from '../types';

/**
 * This class contains data of an team disconnect event
 * @author Eirik Måseidvåg
 */
export default class TeamHistoryDisconnect extends History {
    /**
     * The ID of the user who disconnected from the team
     * @public
     */
    public readonly userId: string

    constructor (options: TeamHistoryDisconnectOptions) {
        super({
            ...options,
            event: new HistoryEvent({
                module: HistoryEventModules.TEAM,
                event: HistoryEventTeam.DISCONNECT
            })
        });
        this.userId = options.userId;
    }
}
