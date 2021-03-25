/**
 * This class contains data of an team switch event
 * @author Eirmas
 */
import History from '../../History';
import HistoryEvent from '../../HistoryEvent';
import { HistoryEventModules } from '../../types';
import { TeamHistorySwitchOptions } from './types';
import { HistoryEventTeam } from '../types';
import { Serialize } from 'serialazy';
import SerializeHelper from '../../../util/SerializeHelper';

@Serialize<TeamHistorySwitchOptions, TeamHistorySwitch>({
    down: ((history: TeamHistorySwitch) => SerializeHelper.toDown(history)),
    up: ((options: TeamHistorySwitchOptions) => new TeamHistorySwitch(options))
})
export default class TeamHistorySwitch extends History {
    /**
     * The ID of the user who switched team
     * @private
     */
    private readonly _userId: string

    /**
     * The ID of the team the user switched to
     * @private
     */
    private readonly _newTeamId: string

    /**
     * The ID of the team the user switched from
     * @private
     */
    private readonly _oldTeamId: string

    constructor (options: TeamHistorySwitchOptions) {
        super({
            ...options,
            event: new HistoryEvent({
                module: HistoryEventModules.TEAM,
                event: HistoryEventTeam.SWITCH
            })
        });
        this._userId = options.userId;
        this._newTeamId = options.newTeamId;
        this._oldTeamId = options.oldTeamId;
    }

    /**
     * Return the ID of the user who switched
     * @returns User
     */
    get userId (): string {
        return this._userId;
    }

    /**
     * Return the ID of the team the user switched to
     * @returns Team
     */
    get newTeamId (): string {
        return this._newTeamId;
    }

    /**
     * Return the ID of the team the user switched from
     * @returns Team
     */
    get oldTeamId (): string {
        return this._oldTeamId;
    }
}
