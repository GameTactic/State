import Collection from './collection/Collection';
import { v4 } from 'uuid';
import { TacticOptions } from './types';
import {Serialize} from "serialazy";

@Serialize<TacticOptions, Tactic>({
  down: ((tactic: Tactic) => ({
    id: tactic.id,
    name: tactic.name,
    collection: tactic.collection,
    creatorId: tactic.creatorId
  })),
  up: ((options: TacticOptions) => new Tactic(options))
})
export default class Tactic {
  private _id: string
  private _name: string
  private _collection: Collection
  private _creatorId: string

  constructor (options: TacticOptions) {
    this._id = v4();
    this._name = options.name;
    this._collection = options.collection;
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

  get collection (): Collection {
    return this._collection;
  }

  set collection (value: Collection) {
    this._collection = value;
  }

  get creatorId (): string {
    return this._creatorId;
  }

  set creatorId (value: string) {
    this._creatorId = value;
  }
}
