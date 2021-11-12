import View from './view/View';
import { Game } from '../../games';
import Image from '../../misc/image/Image';

export interface MapOptions {
    id?: string;
    name: string;
    description: string;
    game: Game;
    views: Array<View>;
    cover: Image;
    [key: string]: any;
}
