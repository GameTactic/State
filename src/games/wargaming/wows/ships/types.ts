import WowsShipDefaultProfileApiResponse from './WowsShipDefaultProfileApiResponse';
import WowsShipDistanceApiResponse from './WowsShipDistanceApiResponse';
import WowsShipConcealmentApiResponse from './WowsShipConcealmentApiResponse';

export interface WowsShipApiResponseOptions {
    isSpecial: boolean,
    isPremium: boolean,
    shipId: number,
    defaultProfile: WowsShipDefaultProfileApiResponse,
    tier: number,
    name: string,
    type: string
}

export interface WowsShipConcealmentApiResponseOptions {
    detectDistanceByPlane: number,
    detectDistanceByShip: number
}

export interface WowsShipDefaultProfileApiResponseOptions {
    atbas: WowsShipDistanceApiResponse | undefined,
    artillery: WowsShipDistanceApiResponse | undefined,
    torpedoes: WowsShipDistanceApiResponse | undefined,
    concealment: WowsShipConcealmentApiResponse | undefined
}

export interface WowsShipDistanceApiResponseOptions {
    distance: number;
}
