import View from './view/View';

export interface MapOptions {
    id?: string;
    name: string;
    description: string;
    views: Array<View>;
    cover: string;
    [key: string]: any;
}
