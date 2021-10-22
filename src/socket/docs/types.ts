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
 * Determines what a subscriber event is for to fill its requirements
 */
export enum SubscriberLevel {
    NONE = 0x0,
    ROOM = 0x1,
    TACTIC = 0x2
}
