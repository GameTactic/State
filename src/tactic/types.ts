import Collection from './collection/Collection';
import User from '../user/User';

export interface TacticOptions {
  name: string;
  collection: Collection;
  creator: User;
}

export interface CollectionOptions extends RootCollectionOptions {
  name: string;
  creator: User;
  parent: Collection | undefined;
}

export interface RootCollectionOptions {
  name?: string;
  children?: Collection[];
}
