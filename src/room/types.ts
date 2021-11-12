import { Game } from '../games';
import Image from '../misc/image/Image';

export interface RoomOptions {
    id?: string;
    game: Game;
    name: string;
    description: string;
    isPrivate?: boolean;
    cover?: Image;
    created?: Date;
    updated?: Date;
    creatorId: string;
    path?: string;
    version?: number;
}
