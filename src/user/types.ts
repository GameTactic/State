import Role from './Role';

export enum RoleType {
  RESERVED = 0x0,
  OWNER = 0x1,
  ADMIN = 0x2,
  USER = 0x3
}

export interface UserOptions {
  id: string;
  name: string;
  onTacticId?: string;
  onViewId?: string;
  onTeamId?: string;
  isOnline: boolean;
  lastOnline: number;
  roles: Role[];
  [key: string]: any;
}

export interface RoleOptions {
  roleType: RoleType;
  assigneeId: string;
  [key: string]: any;
}
