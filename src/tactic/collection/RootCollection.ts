import { v4 } from 'uuid';
import Collection from './Collection';
import { RootCollectionOptions } from './types';
import { Serialize } from 'serialazy';
import SerializeHelper from '../../util/SerializeHelper';

@Serialize<RootCollectionOptions, RootCollection>({
  down: ((rootCollection: RootCollection) => SerializeHelper.toDown(rootCollection)),
  up: ((options: RootCollectionOptions) => new RootCollection(options))
})
export default class RootCollection {
  private _id: string
  private _name: string
  private _children: Collection[]
  private _creatorId: string

  constructor (options: RootCollectionOptions) {
    const finalObject = Object.assign({}, {
      id: v4(),
      name: 'root',
      children: []
    }, options || {});
    this._id = finalObject.id;
    this._name = finalObject.name;
    this._children = finalObject.children;
    this._creatorId = options.creatorId;
  }

  get id (): string {
    return this._id;
  }

  set id (value: string) {
    this._id = value;
  }

  get name (): string {
    return this._name;
  }

  set name (value: string) {
    this._name = value;
  }

  get children (): Collection[] {
    return this._children;
  }

  set children (value: Collection[]) {
    this._children = value;
  }

  get creatorId (): string {
    return this._creatorId;
  }

  set creatorId (value: string) {
    this._creatorId = value;
  }
}
