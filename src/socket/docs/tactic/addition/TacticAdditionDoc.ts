import RoomSocketDoc from '../../RoomSocketDoc';
import TacticHistoryAddition from '../../../../history/tactic/addition/TacticHistoryAddition';
import { HistoryEventModules, HistoryEventTactic } from '../../../../history';
import { SubscriberLevel } from '../../types';
import { CreateTacticData } from '../../../state';

export default class TacticAdditionDoc extends RoomSocketDoc {
    public constructor() {
        super({
            title: 'Add tactic',
            description: 'Add a new tactic',
            module: HistoryEventModules.TACTIC,
            event: HistoryEventTactic.ADDITION,
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
