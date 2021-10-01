import { Game } from '../games';
import Asset from '../canvas/elements/icon/Asset';
import Map from '../canvas/map/Map';

export interface ApiOptions {
    name: string;
    cover: string;
    game: Game;
    assets: Array<Asset>;
    maps: Array<Map>;
}
