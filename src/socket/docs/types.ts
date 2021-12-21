import { HistoryEventEnums, HistoryEventModules } from '../../history';
import { UserPermission } from '../../user';

export type HubSocketDocOptions = Omit<SocketDocOptions, 'requireAuth'>

export interface HubRoomSocketDocOptions extends HubSocketDocOptions {
    permissionScope?: UserPermission;
}

export interface RoomSocketDocOptions extends SocketDocOptions {
    permissionScope?: UserPermission;
}

export interface SocketDocOptions {
    title: string;
    description: string;
    module: HistoryEventModules;
    event: HistoryEventEnums[HistoryEventModules];
    level: SubscriberLevel;
    overrideEvent?: string;
    requireAuth?: boolean;
}

/**
 * Determines what level the subscription is for to fill it's requirements
 */
export enum SubscriberLevel {
    NONE = 'NONE',
    HUB = 'HUB',
    ROOM = 'ROOM',
    TACTIC = 'TACTIC',
    TEAM = 'TEAM',
    VIEW = 'VIEW'
}
