import Collection from './collection/Collection'
import { v4 } from 'uuid'
import {TacticOptions} from "./types";
import User from "../user/User";

export default class Tactic {
  private _id: string
  private _name: string
  private _collection: Collection
  private _creator: User

  constructor (options: TacticOptions) {
    this._id = v4()
    this._name = options.name
    this._collection = options.collection
    this._creator = options.creator
  }

  get id (): string {
    return this._id
  }

  set id (value: string) {
    this._id = value
  }

  get name (): string {
    return this._name
  }

  set name (value: string) {
    this._name = value
  }

  get collection (): Collection {
    return this._collection
  }

  set collection (value: Collection) {
    this._collection = value
  }

  get creator (): User {
    return this._creator
  }

  set creator (value: User) {
    this._creator = value
  }
}
