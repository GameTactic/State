import { GameEntity } from '../../game';

export interface Team {
    id: string;
    tacticId: string;
    name: string;
    color: string;
    entities: GameEntity[];
}
