import { Map } from '..';

export interface Tactic {
    id: string;
    name: string;
    collectionId: string;
    lockedBy: string | undefined;
    map: Map;
    isPinned: boolean;
    createdBy: string;
    [key: string]: string | Map | boolean | undefined;
}






