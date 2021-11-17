import { Game } from '../misc/games';
import Image from '../misc/image/Image';

export interface RoomOptions {
    id?: string;
    game: Game;
    name: string;
    description: string;
    isPrivate?: boolean;
    cover?: Image;
    created?: number;
    updated?: number;
    creatorId: string;
}
