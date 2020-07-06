/**
 *
 * GameTactic State 2020 — NOTICE OF LICENSE
 * This source file is released under GPLv3 license by copyright holders.
 * Please see LICENSE file for more specific licensing terms.
 * @copyright 2019-2020 (c) GameTactic
 * @author Niko Granö <niko@granö.fi>
 *
 */
import CanvasTool from '../CanvasTool';
import CanvasElementAttributes from './CanvasElementAttributes';
import TextData from './data/TextData';
import RulerData from './data/RulerData';
import CircleData from './data/CircleData';
import LineData from './data/LineData';
import PingData from './data/PingData';
import FreeDrawData from './data/FreeDrawData';
import EntityData from './data/EntityData';

export default interface CanvasElement {
    id: string;
    tool: CanvasTool;
    type: string;
    data: TextData | RulerData | CircleData | LineData | PingData | FreeDrawData | EntityData;
    layerId: string;
    jti: string;
    isVisible: boolean;
    attrs: CanvasElementAttributes;
// eslint-disable-next-line semi
};
