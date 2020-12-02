import { Tactic } from './tactic/Tactic';
import { Collection } from './collection/Collection';

export interface TacticState {
    collections: Collection[];
    tactics: Tactic[];
    currentTacticId: string | undefined;
}
