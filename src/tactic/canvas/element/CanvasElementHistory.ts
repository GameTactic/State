/**
 *
 * GameTactic State 2020 — NOTICE OF LICENSE
 * This source file is released under GPLv3 license by copyright holders.
 * Please see LICENSE file for more specific licensing terms.
 * @copyright 2019-2020 (c) GameTactic
 * @author Niko Granö <niko@granö.fi>
 *
 */

import {
    AdditionCommit,
    RedoCommit,
    UndoCommit,
    MoveCommit,
    RemovalCommit,
    TransformCommit,
    } from './commit';

export interface CanvasElementHistory {
    id: string;
    jti: string;
    commitType: string;
    commitData: AdditionCommit | RedoCommit | UndoCommit | MoveCommit | RemovalCommit | TransformCommit;
    timestampModified: number;
}
