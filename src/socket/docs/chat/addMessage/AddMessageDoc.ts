import SocketDoc from '../../types';
import { HistoryEventChat, HistoryEventModules } from '../../../../history';
import ChatHistoryAddition from '../../../../history/chat/addition/ChatHistoryAddition';

export default class AddMessageDoc extends SocketDoc {
    public constructor() {
        super({
            title: 'Add Message',
            description: 'Adds a message to the chat',
            module: HistoryEventModules.CHAT,
            event: HistoryEventChat.ADDITION
        });
    }
}

export type AddMessageDocPayload = {
    history: ChatHistoryAddition;
}
