import RoomSocketDoc from '../../RoomSocketDoc';
import { HistoryEventChat, HistoryEventModules } from '../../../../history';
import ChatHistoryAddition from '../../../../history/chat/addition/ChatHistoryAddition';
import { SubscriberLevel } from '../../types';

export default class ChatAdditionDoc extends RoomSocketDoc {
    public constructor() {
        super({
            title: 'Add Message',
            description: 'Adds a message to the chat',
            module: HistoryEventModules.CHAT,
            event: HistoryEventChat.ADDITION,
            level: SubscriberLevel.ROOM,
            permissionScope: 'user'
        });
    }
}

export type ChatAdditionDocPayload = {
    history: ChatHistoryAddition;
}
