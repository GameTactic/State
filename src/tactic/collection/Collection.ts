import RootCollection from './RootCollection';
import { CollectionOptions } from './types';

export default class Collection extends RootCollection {
  public parentId: string

  public creatorId: string;

  constructor (options: CollectionOptions) {
    super(options);
    this.parentId = options.parentId;
    this.creatorId = options.creatorId;
  }
}
