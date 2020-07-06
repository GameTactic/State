/**
 *
 * GameTactic State 2020 — NOTICE OF LICENSE
 * This source file is released under GPLv3 license by copyright holders.
 * Please see LICENSE file for more specific licensing terms.
 * @copyright 2019-2020 (c) GameTactic
 * @author Niko Granö <niko@granö.fi>
 *
 */
import Room from './room/Room';
import User from './user/User';
import Collection from './Collection';
import Tactic from './tactic/Tactic';
import CustomStageConfig from './CustomStageConfig';

export default interface State {
    room: Room;
    stageConfig: CustomStageConfig;
    collections: { [key: string]: Collection };
    tactics: { [key: string]: Tactic };
    users: { [key: string]: User };
    // eslint-disable-next-line semi
};
