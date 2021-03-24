import RootCollection from './RootCollection';
import User from '../../user/User';
import { CollectionOptions } from '../types';
import {Serialize} from "serialazy";

@Serialize<CollectionOptions, Collection>({
  down: ((collection: Collection) => ({
    id: collection.id,
    name: collection.name,
    children: collection.children,
    creator: collection.creator,
    parent: collection.parent
  })),
  up: ((options: CollectionOptions) => new Collection(options))
})
export default class Collection extends RootCollection {
  private _creator: User
  private _parent: Collection | undefined

  constructor (options: CollectionOptions) {
    super({
      name: options.name,
      children: options.children
    });
    this._creator = options.creator;
    this._parent = options.parent;
  }

  get creator (): User {
    return this._creator;
  }

  set creator (value: User) {
    this._creator = value;
  }

  get parent (): Collection | undefined {
    return this._parent;
  }

  set parent (value: Collection | undefined) {
    this._parent = value;
  }
}
