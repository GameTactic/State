import { Game } from '../games';

export interface RoomOptions {
    id?: string;
    game: Game;
    name: string;
    description: string;
    isPrivate?: boolean;
    cover?: string;
    created?: Date;
    updated?: Date;
    creatorId: string;
    path?: string;
    version?: number;
}
