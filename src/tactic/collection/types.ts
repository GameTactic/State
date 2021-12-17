import Collection from './Collection';

export interface CollectionOptions extends RootCollectionOptions {
    name: string;
    parentId: string;
    creatorId: string;
}

export interface RootCollectionOptions {
    id?: string;
    name?: string;
    children?: Collection[];
    creatorId: string;
    [key: string]: any;
}
