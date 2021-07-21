import Role from './Role';

export enum RoleType {
  RESERVED = 0x0,
  SYSTEM = 0x1,
  MODERATOR = 0x2,
  OWNER = 0x3,
  ADMINISTRATOR = 0x4,
  MEMBER = 0x5,
  GUEST = 0x6
}

export interface UserOptions {
  id: string;
  name: string;
  onTacticId?: string;
  onViewId?: string;
  onTeamId?: string;
  isOnline: boolean;
  lastOnline: number;
  role: Role;
  [key: string]: any;
}

export interface RoleOptions {
  roleType: RoleType;
  assigneeId: string;
  [key: string]: any;
}
