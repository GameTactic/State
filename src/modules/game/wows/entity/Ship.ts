import { WowsShipType } from "./type/WowsShipType";
import { Entity } from "../..";

export interface Ship extends Entity {
    tier: number;
    apiId: string | undefined;
    type: WowsShipType;
    default: boolean;
    data: {
        artillery: number | undefined;
        hydro: number | undefined;
        radar: number | undefined;
        torpedo: number | undefined;
        concealmentPlane: number | undefined;
        concealmentShip: number | undefined;
        atbas: number | undefined;
        [key: string]: number | undefined;
    };
}
