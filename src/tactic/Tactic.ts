import { v4 } from 'uuid';
import { TacticOptions } from './types';
import { Serialize } from 'serialazy';
import SerializeHelper from '../util/SerializeHelper';

@Serialize<TacticOptions, Tactic>({
  down: ((tactic: Tactic) => SerializeHelper.toDown(tactic)),
  up: ((options: TacticOptions) => new Tactic(options))
})
export default class Tactic {
  public id: string
  public name: string
  public collectionId: string
  public creatorId: string

  constructor (options: TacticOptions) {
    this.id = v4();
    this.name = options.name;
    this.collectionId = options.collectionId;
    this.creatorId = options.creatorId;
  }
}
