/**
 * This class contains data of an team switch event
 * @author Eirmas
 */
import History from '../../History';
import HistoryEvent from '../../HistoryEvent';
import { HistoryEventModules } from '../../types';
import { TeamHistorySwitchOptions } from './types';
import { HistoryEventTeam } from '../types';

export default class TeamHistorySwitch extends History {
    /**
     * The ID of the user who switched team
     * @public
     */
    public readonly userId: string

    /**
     * The ID of the team the user switched to
     * @public
     */
    public readonly newTeamId: string | undefined

    /**
     * The ID of the team the user switched from
     * @public
     */
    public readonly oldTeamId: string | undefined

    constructor (options: TeamHistorySwitchOptions) {
        super({
            ...options,
            event: new HistoryEvent({
                module: HistoryEventModules.TEAM,
                event: HistoryEventTeam.SWITCH
            })
        });
        this.userId = options.userId;
        this.newTeamId = options.newTeamId;
        this.oldTeamId = options.oldTeamId;
    }
}
