import { Game} from '../Game';
import { Dimensions } from '../../../util';

export interface Entity {
    id: string;
    game: Game;
    name: string;
    title: string;
    image: string;
    canvasImage: {
        image: string;
        dimensions: Dimensions;
    };
    teamId?: string;
    alias?: string;
    color?: string;
}
