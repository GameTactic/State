/**
 *
 * GameTactic State 2020 — NOTICE OF LICENSE
 * This source file is released under GPLv3 license by copyright holders.
 * Please see LICENSE file for more specific licensing terms.
 * @copyright 2019-2020 (c) GameTactic
 * @author Niko Granö <niko@granö.fi>
 *
 */

export default interface UserRole {
    id: number;
    date: Date;
    assignedBy: string;
    // eslint-disable-next-line semi
}

export enum UserRoles {
    RESERVED = 0x0,
    OWNER = 0x1,
    ADMIN = 0x2,
    USER= 0x3,
}

