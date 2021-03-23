import { v4 } from 'uuid';
import Collection from './Collection';
import { RootCollectionOptions } from '../types';

export default class RootCollection {
  private _id: string
  private _name: string
  private _children: Collection[]

  constructor (options?: RootCollectionOptions) {
    const finalObject = Object.assign({}, {
      name: 'root',
      children: []
    }, options || {});
    this._id = v4();
    this._name = finalObject.name;
    this._children = finalObject.children;
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
}
