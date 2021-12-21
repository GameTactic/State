import RoomSocketDoc from '../../RoomSocketDoc';
import TacticHistoryAddition from '../../../../history/tactic/addition/TacticHistoryAddition';
import { CreateTacticData } from '../../../state';
import { HistoryEventModules, HistoryEventTactic } from '../../../../history';
import { SubscriberLevel } from '../../types';

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

export type TacticAdditionInDocPayload = {
    data: CreateTacticData;
};

export type TacticAdditionOutDocPayload = {
    history: TacticHistoryAddition;
};
