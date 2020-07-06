/**
 *
 * GameTactic State 2020 — NOTICE OF LICENSE
 * This source file is released under GPLv3 license by copyright holders.
 * Please see LICENSE file for more specific licensing terms.
 * @copyright 2019-2020 (c) GameTactic
 * @author Niko Granö <niko@granö.fi>
 *
 */
import TacticMap from './TacticMap';
import CanvasElementHistory from './canvas/element/CanvasElementHistory';
import CanvasElement from './canvas/element/CanvasElement';

export default interface Tactic {
    id: string;
    name: string;
    collectionId: string;
    lockedBy: string | undefined;
    map: TacticMap;
    isPinned: boolean;
    createdBy: string;
    canvasElements: CanvasElement[];
    canvasElementsHistory: CanvasElementHistory[];
    // eslint-disable-next-line semi
}






