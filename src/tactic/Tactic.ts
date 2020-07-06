/**
 *
 * GameTactic State 2020 — NOTICE OF LICENSE
 * This source file is released under GPLv3 license by copyright holders.
 * Please see LICENSE file for more specific licensing terms.
 * @copyright 2019-2020 (c) GameTactic
 * @author Niko Granö <niko@granö.fi>
 *
 */
import { TacticMap } from './';
import { CanvasElementHistory, CanvasElement } from './canvas/element';

export interface Tactic {
    id: string;
    name: string;
    collectionId: string;
    lockedBy: string | undefined;
    map: TacticMap;
    isPinned: boolean;
    createdBy: string;
    canvasElements: CanvasElement[];
    canvasElementsHistory: CanvasElementHistory[];
}






