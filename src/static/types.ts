import Resource from '../canvas/resource/Resource';
import Map from '../canvas/map/Map';
import { Game } from '../misc/games';

export interface StaticGameOptions {
    name: string;
    cover: string;
    coverSVG: string;
    game: Game;
    acronym: string;
}

export interface StaticGameExtendedOptions extends StaticGameOptions {
    entities: Array<Resource>;
    icons: Array<Resource>;
    maps: Array<Map>;
    categories?: {
        entity: Array<string>;
        icon: Array<string>;
    };
}
