import RoomSocketDoc from '../../RoomSocketDoc';
import TacticHistoryUpdate from '../../../../history/tactic/update/TacticHistoryUpdate';
import { HistoryEventModules, HistoryEventTactic } from '../../../../history';
import { SubscriberLevel } from '../../types';
import Tactic from '../../../../tactic/Tactic';

export default class TacticUpdateDoc extends RoomSocketDoc {
    public constructor() {
        super({
            title: 'Update tactic',
            description: 'Updates a tactic',
            module: HistoryEventModules.TACTIC,
            event: HistoryEventTactic.UPDATE,
            level: SubscriberLevel.ROOM,
            permissionScope: 'editor'
        });
    }
}

export type TacticUpdateInDocPayload = {
    history: TacticHistoryUpdate;
};

export type TacticUpdateOutDocPayload = {
    history: TacticHistoryUpdate;
    tactic: Tactic;
};
