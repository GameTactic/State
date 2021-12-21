import { AbstractHistoryOptions } from '../../types';
import { Game } from '../../../misc/games';

export interface HubHistoryRoomAdditionOptions extends AbstractHistoryOptions {
    name: string;
    description: string;
    game: Game;
    cover: string | null;
    isPrivate: boolean;
}
