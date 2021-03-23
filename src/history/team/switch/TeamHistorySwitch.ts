/**
 * This class contains data of an team switch event
 * @author Eirmas
 */
import History from "../../History";
import HistoryEvent from "../../HistoryEvent";
import {HistoryEventModules} from "../../types";
import {TeamHistorySwitchOptions} from './types';
import Team from "../../../team/Team";
import User from "../../../user/User";
import {HistoryEventTeam} from "../types";

export default class TeamHistorySwitch extends History {
    /**
     * The user who switched team
     * @private
     */
    private readonly _user: User

    /**
     * The team the user switched to
     * @private
     */
    private readonly _newTeam: Team

    /**
     * The team the user switched from
     * @private
     */
    private readonly _oldTeam: Team

    constructor (options: TeamHistorySwitchOptions) {
        super({
            ...options,
            event: new HistoryEvent({
                module: HistoryEventModules.TEAM,
                event: HistoryEventTeam.SWITCH
            })
        })
        this._user = options.user
        this._newTeam = options.newTeam
        this._oldTeam = options.oldTeam
    }

    /**
     * Return the user who switched
     * @returns User
     */
    get user (): User {
        return this._user
    }

    /**
     * Return the team the user switched to
     * @returns Team
     */
    get newTeam (): Team {
        return this._newTeam
    }

    /**
     * Return the team the user switched from
     * @returns Team
     */
    get oldTeam (): Team {
        return this._oldTeam
    }
}
