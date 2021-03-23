import { Game } from '../games';

export interface Room {
    game: Game,
    isPrivate: boolean,
    roomId: string
}
