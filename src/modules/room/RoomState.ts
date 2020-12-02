import { Locale } from './locale/Locale';
import { Api } from './api/Api';
import { Game } from '../game';
import { Presentation } from './presentation/Presentation';

export interface RoomState {
    locale: Locale;
    api: Api[];
    isCanvasLoaded: boolean;
    game: Game;
    presentation: Presentation;
    isPrivate: boolean;
    roomId: string | undefined;
}
