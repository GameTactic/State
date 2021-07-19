import View from './view/View';

export interface MapOptions {
    id?: string;
    name: string;
    description: string;
    views: Array<View>;
    url: string;
    [key: string]: any;
}
