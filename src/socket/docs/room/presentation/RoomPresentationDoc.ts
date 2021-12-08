import RoomSocketDoc from '../../RoomSocketDoc';
import { HistoryEventModules, HistoryEventRoom } from '../../../../history';
import { SubscriberLevel } from '../../types';
import RoomHistoryPresentation from '../../../../history/room/presentation/RoomHistoryPresentation';

export default class RoomPresentationDoc extends RoomSocketDoc {
    public constructor() {
        super({
            title: 'Presentation',
            description: 'Sets the room to presentation mode',
            module: HistoryEventModules.ROOM,
            event: HistoryEventRoom.PRESENTATION,
            level: SubscriberLevel.ROOM,
            permissionScope: 'presenter'
        });
    }
}
export type RoomDisconnectDocPayload = {
    history: RoomHistoryPresentation;
};
