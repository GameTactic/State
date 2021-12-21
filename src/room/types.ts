import { Game } from '../misc/games';
import { UserPermission } from '../user';

export interface RoomOptions {
    id?: string;
    game: Game;
    name: string;
    description: string;
    isPrivate?: boolean;
    cover?: string;
    created?: number;
    updated?: number;
    members: Array<RoomMember>;
}

export type RoomMember = {
    id: string;
    permissions: Array<UserPermission>;
}
