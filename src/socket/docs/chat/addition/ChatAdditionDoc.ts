import SocketDoc from '../../SocketDoc';
import { HistoryEventChat, HistoryEventModules } from '../../../../history';
import ChatHistoryAddition from '../../../../history/chat/addition/ChatHistoryAddition';
import { SubscriberLevel } from '../../types';

export default class ChatAdditionDoc extends SocketDoc {
    public constructor() {
        super({
            title: 'Add Message',
            description: 'Adds a message to the chat',
            module: HistoryEventModules.CHAT,
            event: HistoryEventChat.ADDITION,
            level: SubscriberLevel.ROOM
        });
    }
}

export type ChatAdditionDocPayload = {
    history: ChatHistoryAddition;
}
