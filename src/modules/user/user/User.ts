import { Role } from '..';

export interface User {
    jti: string;
    name: string;
    onTacticId: string;
    onTeamId: string;
    isOnline: boolean;
    lastOnline: Date | undefined;
    roles: Role[];
}
