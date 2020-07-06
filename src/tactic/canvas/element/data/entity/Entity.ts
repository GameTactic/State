/**
 *
 * GameTactic State 2020 — NOTICE OF LICENSE
 * This source file is released under GPLv3 license by copyright holders.
 * Please see LICENSE file for more specific licensing terms.
 * @copyright 2019-2020 (c) GameTactic
 * @author Niko Granö <niko@granö.fi>
 *
 */
export default interface Entity {
    text: string;
    shortText: string;
    type: string;
    value: number;
    tier: number;
    image: string | undefined;
    // eslint-disable-next-line semi
};
