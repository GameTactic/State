/**
 *
 * GameTactic State 2020 — NOTICE OF LICENSE
 * This source file is released under GPLv3 license by copyright holders.
 * Please see LICENSE file for more specific licensing terms.
 * @copyright 2019-2020 (c) GameTactic
 * @author Niko Granö <niko@granö.fi>
 *
 */
import { CanvasPoint } from './tactic/canvas';

export interface CustomStageConfig {
    scale: CanvasPoint;
    width: number;
    height: number;
    initialWidth: number;
    initialHeight: number;
    mapSrc: string;
    mapRatio: number;
}
