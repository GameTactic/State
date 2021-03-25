import RootCollection from './RootCollection';
import { CollectionOptions } from './types';
import { Serialize } from 'serialazy';
import SerializeHelper from '../../util/SerializeHelper';

@Serialize<CollectionOptions, Collection>({
  down: ((collection: Collection) => SerializeHelper.toDown(collection)),
  up: ((options: CollectionOptions) => new Collection(options))
})
export default class Collection extends RootCollection {
  private _parentId: string

  constructor (options: CollectionOptions) {
    super(options);
    this._parentId = options.parentId;
  }

  get parent (): string {
    return this._parentId;
  }

  set parent (value: string) {
    this._parentId = value;
  }
}
