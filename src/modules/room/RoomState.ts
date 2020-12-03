import { Game } from '../game';
import { Presentation } from './presentation';

export interface RoomState {
    game: Game;
    presentation: Presentation;
    isPrivate: boolean;
    roomId: string | undefined;
}
