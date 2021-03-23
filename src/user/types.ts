import User from './User';
import Role from './Role';

export enum RoleType {
  RESERVED = 0x0,
  OWNER = 0x1,
  ADMIN = 0x2,
  USER= 0x3
}

export interface UserOptions {
  jti: string;
  name: string;
  onTacticId?: string;
  onTeamId?: string;
  isOnline: boolean;
  lastOnline: number;
  roles: Role[];
}

export interface RoleOptions {
  roleType: RoleType;
  assignedBy: User;
}
