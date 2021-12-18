export type UserPermission = typeof USER_PERMISSION_OPTIONS[number];

export const USER_PERMISSION_OPTIONS = [
  'creator',
  'moderator',
  'presenter',
  'editor',
  'user',
] as const;

export interface UserOptions {
  id: string;
  name: string;
  onTacticId?: string;
  onViewId?: string;
  onTeamId?: string;
  isPresenting?: boolean;
  permissions: Array<UserPermission>;
}
