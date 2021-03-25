import WowsInfoShipTypeImagesApiResponse from './WowsInfoShipTypeImagesApiResponse';

export interface WowsInfoApiResponseOptions {
    shipTypes: { [p: string]: string },
    shipTypeImages: { [p: string]: WowsInfoShipTypeImagesApiResponse }
}

export interface WowsInfoShipTypeImagesApiResponseOptions {
    imagePremium: string;
    image: string;
    imageElite: string;
}
