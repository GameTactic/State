import User from "../user/User";
import HistoryEvent from "./HistoryEvent";
import {Namespaces} from "../modules/types";
import {HistoryEventCanvas} from "./canvas/types";
import {HistoryEventAuthentication} from "./authentication/types";
import {HistoryEventRoom} from "./room/types";
import {HistoryEventUser} from "./user/types";
import {HistoryEventTool} from "./tool/types";
import {HistoryEventTeam} from "./team/types";
import {HistoryEventTactic} from "./tactic/types";

export interface HistoryOptions {
  id?: string;
  timestamp?: number;
  creator: User;
  event: HistoryEvent;
}

export interface HistoryEventOptions {
  module: Namespaces;
  event: HistoryEventEnums[Namespaces];
}

export interface HistoryEventEnums {
  [Namespaces.CANVAS]: HistoryEventCanvas;
  [Namespaces.AUTHENTICATION]: HistoryEventAuthentication;
  [Namespaces.ROOM]: HistoryEventRoom;
  [Namespaces.USER]: HistoryEventUser;
  [Namespaces.TOOL]: HistoryEventTool;
  [Namespaces.TACTIC]: HistoryEventTactic;
  [Namespaces.TEAM]: HistoryEventTeam;
  [Namespaces.HISTORY]: null;
}
