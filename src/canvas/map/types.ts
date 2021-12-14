import View from './view/View';
import { Game } from '../../misc/games';
import Image from '../../misc/image/Image';
import { TeamOptions } from '../../team';

export interface MapOptions {
    id?: string;
    name: string;
    description: string;
    game: Game;
    views: Array<View>;
    cover: Image;
    teamConstructors: Array<Omit<TeamOptions, 'id' | 'tacticId'>>;
    [key: string]: any;
}
