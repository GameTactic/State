import { v4 } from 'uuid';
import { TacticOptions } from './types';
import { Serialize } from 'serialazy';
import SerializeHelper from '../util/SerializeHelper';

@Serialize<TacticOptions, Tactic>({
  down: ((tactic: Tactic) => SerializeHelper.toDown(tactic)),
  up: ((options: TacticOptions) => new Tactic(options))
})
export default class Tactic {
  private _id: string
  private _name: string
  private _collectionId: string
  private _creatorId: string

  constructor (options: TacticOptions) {
    this._id = v4();
    this._name = options.name;
    this._collectionId = options.collectionId;
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

  get collection (): string {
    return this._collectionId;
  }

  set collection (value: string) {
    this._collectionId = value;
  }

  get creatorId (): string {
    return this._creatorId;
  }

  set creatorId (value: string) {
    this._creatorId = value;
  }
}
