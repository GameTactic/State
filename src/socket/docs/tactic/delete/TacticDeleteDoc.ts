import RoomSocketDoc from '../../RoomSocketDoc';
import TacticHistoryDelete from '../../../../history/tactic/delete/TacticHistoryDelete';
import { HistoryEventModules, HistoryEventTactic } from '../../../../history';
import { SubscriberLevel } from '../../types';

export default class TacticDeleteDoc extends RoomSocketDoc {
    public constructor() {
        super({
            title: 'Delete tactic',
            description: 'Deletes a tactic',
            module: HistoryEventModules.TACTIC,
            event: HistoryEventTactic.DELETE,
            level: SubscriberLevel.ROOM,
            permissionScope: 'editor'
        });
    }
}

export type TacticDeleteDocPayload = {
    history: TacticHistoryDelete;
};
