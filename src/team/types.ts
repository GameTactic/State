import Tactic from '../tactic/Tactic';
import Entity from './abtract/Entity';

export interface TeamOptions {
  id?: string;
  tactic: Tactic;
  name: string;
  color: number;
  entities: Entity[];
}
