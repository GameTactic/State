import { Tactic } from './tactic';
import { Collection } from './collection';

export interface TacticState {
    collections: Collection[];
    tactics: Tactic[];
}
