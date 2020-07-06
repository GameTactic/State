/**
 *
 * GameTactic State 2020 — NOTICE OF LICENSE
 * This source file is released under GPLv3 license by copyright holders.
 * Please see LICENSE file for more specific licensing terms.
 * @copyright 2019-2020 (c) GameTactic
 * @author Niko Granö <niko@granö.fi>
 *
 */
import AdditionCommit from './commit/AdditionCommit';
import RedoCommit from './commit/RedoCommit';
import UndoCommit from './commit/UndoCommit';
import MoveCommit from './commit/MoveCommit';
import RemovalCommit from './commit/RemovalCommit';

export default interface CanvasElementHistory {
    id: string;
    jti: string;
    commitType: string;
    commitData: AdditionCommit | RedoCommit | UndoCommit | MoveCommit | RemovalCommit;
    timestampModified: number;
    // eslint-disable-next-line semi
};
