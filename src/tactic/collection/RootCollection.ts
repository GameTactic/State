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
  public id: string
  public name: string
  public children: Collection[]
  public creatorId: string

  constructor (options: RootCollectionOptions) {
    const finalObject = Object.assign({}, {
      id: v4(),
      name: 'root',
      children: []
    }, options || {});
    this.id = finalObject.id;
    this.name = finalObject.name;
    this.children = finalObject.children;
    this.creatorId = options.creatorId;
  }
}
