import { v4 } from 'uuid';
import { TacticOptions } from './types';

export default class Tactic {
  public id: string
  public name: string
  public collectionId: string
  public creatorId: string

  constructor (options: TacticOptions) {
    this.id = options.id || v4();
    this.name = options.name;
    this.collectionId = options.collectionId;
    this.creatorId = options.creatorId;
  }
}
