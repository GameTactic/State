import RoomSocketDoc from '../../RoomSocketDoc';
import TacticHistoryAddition from '../../../../history/tactic/addition/TacticHistoryAddition';
import { TacticData } from '../../../state';
import { HistoryEventModules, HistoryEventTactic } from '../../../../history';
import Tactic from '../../../../tactic/Tactic';
import { SubscriberLevel } from '../../types';

export default class TacticAdditionDoc extends RoomSocketDoc {
    public constructor() {
        super({
            title: 'Add tactic',
            description: 'Add a new tactic',
            module: HistoryEventModules.TACTIC,
            event: HistoryEventTactic.ADDITION,
            level: SubscriberLevel.ROOM,
            permissionScope: 'user'
        });
    }
}

export type TacticAdditionInDocPayload = {
    history: TacticHistoryAddition;
    data: TacticData;
};

export type TacticAdditionOutDocPayload = {
    history: TacticHistoryAddition;
    data: Tactic;
};
