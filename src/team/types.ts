import Entity from './abtract/Entity';

export interface TeamOptions {
  id?: string;
  tacticId: string;
  name: string;
  color: number;
  entities: Entity[];
}
