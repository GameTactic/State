import RootCollection from './RootCollection';
import { CollectionOptions } from './types';
import { Serialize } from 'serialazy';
import SerializeHelper from '../../util/SerializeHelper';

@Serialize<CollectionOptions, Collection>({
  down: ((collection: Collection) => SerializeHelper.toDown(collection)),
  up: ((options: CollectionOptions) => new Collection(options))
})
export default class Collection extends RootCollection {
  public parentId: string

  constructor (options: CollectionOptions) {
    super(options);
    this.parentId = options.parentId;
  }
}
