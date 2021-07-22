import HistoryEvent from './HistoryEvent';
import { HistoryEventCanvas } from './canvas';
import { HistoryEventRoom } from './room';
import { HistoryEventUser } from './user';
import { HistoryEventTactic } from './tactic';
import { HistoryEventLifecycle } from './lifecycle';
import { HistoryEventTeam } from './team';
import { HistoryEventChat } from './chat/types';

export interface HistoryOptions extends AbstractHistoryOptions {
  event: HistoryEvent;
}

export interface AbstractHistoryOptions {
  id?: string;
  timestamp?: number;
  creatorId: string;
  [key: string]: any;
}

export interface HistoryEventOptions {
  module: HistoryEventModules;
  event: HistoryEventEnums[HistoryEventModules];
  [key: string]: any;
}

export enum HistoryEventModules {
  CANVAS = 'CANVAS',
  LIFECYCLE = 'LIFECYCLE',
  ROOM = 'ROOM',
  TACTIC = 'TACTIC',
  TEAM = 'TEAM',
  USER = 'USER',
  CHAT = 'CHAT'
}

export interface HistoryEventEnums {
  [HistoryEventModules.CANVAS]: HistoryEventCanvas;
  [HistoryEventModules.LIFECYCLE]: HistoryEventLifecycle;
  [HistoryEventModules.ROOM]: HistoryEventRoom;
  [HistoryEventModules.TACTIC]: HistoryEventTactic;
  [HistoryEventModules.TEAM]: HistoryEventTeam;
  [HistoryEventModules.USER]: HistoryEventUser;
  [HistoryEventModules.CHAT]: HistoryEventChat;
}
