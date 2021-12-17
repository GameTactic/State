export type UserPermission = typeof USER_PERMISSION_OPTIONS[number];

export const USER_PERMISSION_OPTIONS = [
  'owner',
  'editor',
  'presenter',
  'user',
  'creator',
] as const;

export interface UserOptions {
  id: string;
  name: string;
  onTacticId?: string;
  onViewId?: string;
  onTeamId?: string;
  permissions: Array<UserPermission>;
}
