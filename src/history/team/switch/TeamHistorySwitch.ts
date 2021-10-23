/**
 * This class contains data of an tactic connect event
 * @author Eirmas
 */
import History from '../../History';
import HistoryEvent from '../../HistoryEvent';
import { HistoryEventModules } from '../../types';
import { TeamHistorySwitchOptions } from './types';
import { HistoryEventTeam } from '../types';

export default class TeamHistorySwitch extends History {
    /**
     * The user who connected to the tactic
     * @public
     */
    public readonly userId: string

    /**
     * The tactic the user switched to
     * @public
     */
    public readonly newTeamId: string

    /**
     * The tactic the user switched from
     * @public
     */
    public readonly oldTeamId: string

    constructor (options: TeamHistorySwitchOptions) {
        super({
            ...options,
            event: new HistoryEvent({
                module: HistoryEventModules.TACTIC,
                event: HistoryEventTeam.SWITCH
            })
        });
        this.userId = options.userId;
        this.newTeamId = options.newTeamId;
        this.oldTeamId = options.oldTeamId;
    }
}
