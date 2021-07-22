import SocketDoc, { SocketEventType } from '../../types';
import { HistoryEventChat, HistoryEventModules } from '../../../../history';
import ChatHistoryAddition from '../../../../history/chat/addition/ChatHistoryAddition';

export default class AddMessageDoc implements SocketDoc {
    title = 'Add Message';
    description = 'Adds a message to the chat';
    event = `${HistoryEventModules.CHAT}/${HistoryEventChat.ADDITION}`;
    type = SocketEventType.IN_AND_OUT;
}

export type AddMessageDocPayload = {
    history: ChatHistoryAddition;
}
