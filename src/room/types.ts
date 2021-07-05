import { Game } from '../games';

export interface Room {
    game: Game,
    isPrivate: boolean,
    roomId: string,
    name: string,
    cover: string|null,
    description: string,
    created: Date,
    updated: Date,
    ownerId: string,
    customPath: string,
    version: number
}
