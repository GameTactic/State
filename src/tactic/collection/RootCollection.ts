import { v4 } from 'uuid';
import Collection from './Collection';
import { RootCollectionOptions } from './types';

export default class RootCollection {
  public id: string
  public name: string
  public children: Collection[]

  constructor (options: RootCollectionOptions) {
    const finalObject = Object.assign({}, {
      id: v4(),
      name: 'root',
      children: []
    }, options || {});
    this.id = finalObject.id;
    this.name = finalObject.name;
    this.children = finalObject.children;
  }
}
