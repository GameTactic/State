import { Game } from '../games';
import Asset from '../canvas/elements/icon/Asset';
import Map from '../canvas/map/Map';

export interface GameDataOptions {
    name: string;
    cover: string;
    game: Game;
}

export interface GameAssetsOptions extends GameDataOptions {
    assets: Array<Asset>;
    maps: Array<Map>;
}
