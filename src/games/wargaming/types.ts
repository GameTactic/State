import WgMetaApiResponse from './WgMetaApiResponse';
import WgDataApiResponse from './WgDataApiResponse';

export interface WgApiResponseOptions {
    status: string;
    meta: WgMetaApiResponse;
    data: WgDataApiResponse;
}

export interface WgMetaApiResponseOptions {
    count: number;
    pageTotal: number;
    total: number;
    limit: number;
    page: number;
}
