import { CanvasElement, CanvasElementHistory } from '../../canvas';
import { Team } from "../../team";
import { Map } from '..';

export interface Tactic {
    id: string;
    name: string;
    collectionId: string;
    lockedBy: string | undefined;
    map: Map;
    isPinned: boolean;
    createdBy: string;
    canvasElements: CanvasElement[];
    canvasElementsHistory: CanvasElementHistory[];
    teams: Team[];
    [key: string]: string | Map | Team[] | CanvasElement[] | CanvasElementHistory[] | boolean | undefined;
}






