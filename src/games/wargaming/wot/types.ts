import WotTankImageApiResponse from './WotTankImageApiResponse';

export interface WotTankApiResponseOptions {
    tankId: number;
    type: string;
    name: string;
    image: WotTankImageApiResponse;
}

export interface WotTankImageApiResponseOptions {
    smallIcon: string;
    contourIcon: string;
    bigIcon: string;
}
