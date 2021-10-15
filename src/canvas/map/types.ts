import View from './view/View';
import { Game } from '../../games';

export interface MapOptions {
    id?: string;
    name: string;
    description: string;
    game: Game;
    views: Array<View>;
    cover: string;
    [key: string]: any;
}
