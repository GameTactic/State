/**
 *
 * GameTactic State 2020 — NOTICE OF LICENSE
 * This source file is released under GPLv3 license by copyright holders.
 * Please see LICENSE file for more specific licensing terms.
 * @copyright 2019-2020 (c) GameTactic
 * @author Niko Granö <niko@granö.fi>
 *
 */
import { CanvasElement } from '../../';

export interface TransformCommit {
    from: CanvasElement['attrs'];
    to: CanvasElement['attrs'];
    groups: string[];
}
