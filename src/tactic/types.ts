import Collection from './collection/Collection';
import User from '../user/User';

export interface TacticOptions {
  id?: string;
  name: string;
  collection: Collection;
  creatorId: string;
  [key: string]: any;
}

export interface CollectionOptions extends RootCollectionOptions {
  name: string;
  creator: User;
  parent: Collection | undefined;
}

export interface RootCollectionOptions {
  id?: string;
  name?: string;
  children?: Collection[];
  [key: string]: any;
}
