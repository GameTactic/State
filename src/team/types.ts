import Entity from '../canvas/entity/Entity';

export interface TeamOptions {
  id?: string;
  tacticId: string;
  name: string;
  color: number;
  entities: Entity[];
}
