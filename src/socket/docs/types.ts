import { HistoryEventEnums, HistoryEventModules } from '../../history';

export interface SocketDocOptions {
    title: string;
    description: string;
    module: HistoryEventModules;
    event: HistoryEventEnums[HistoryEventModules];
    level: SubscriberLevel;
    overrideEvent?: string;
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
