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
    NONE = 0x0,
    ROOM = 0x1,
    TACTIC = 0x2,
    TEAM = 0x3
}
