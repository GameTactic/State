import { Team } from './team/Team';

export interface TeamState {
    teams: Team[];
    selectedTeam: Team | undefined;
}
