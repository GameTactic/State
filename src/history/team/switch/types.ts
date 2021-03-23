import {AbstractHistoryOptions} from "../../types";
import Team from "../../../team/Team";
import User from "../../../user/User";

export interface TeamHistorySwitchOptions extends AbstractHistoryOptions {
    user: User;
    newTeam: Team;
    oldTeam: Team;
}
