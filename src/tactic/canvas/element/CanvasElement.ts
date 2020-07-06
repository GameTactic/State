/**
 *
 * GameTactic State 2020 — NOTICE OF LICENSE
 * This source file is released under GPLv3 license by copyright holders.
 * Please see LICENSE file for more specific licensing terms.
 * @copyright 2019-2020 (c) GameTactic
 * @author Niko Granö <niko@granö.fi>
 *
 */
import { CanvasTool } from '../';
import { CanvasElementAttributes } from './';
import {
    TextData,
    RulerData,
    CircleData,
    LineData,
    PingData,
    FreeDrawData,
    EntityData
    } from './data';

export interface CanvasElement {
    id: string;
    tool: CanvasTool;
    type: string;
    data: TextData | RulerData | CircleData | LineData | PingData | FreeDrawData | EntityData;
    layerId: string;
    jti: string;
    isVisible: boolean;
    attrs: CanvasElementAttributes;
}
