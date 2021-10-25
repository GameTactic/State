import { ChatHistoryAdditionOptions } from './types';
import History from '../../History';
import HistoryEvent from '../../HistoryEvent';
import { HistoryEventModules } from '../../types';
import Message from '../../../misc/message/Message';
import { HistoryEventChat } from '../types';

/**
 * This class contains data of an addition event to the chat
 * @author Eirik Måseidvåg
 */
export default class ChatHistoryAddition extends History {
    /**
     * The message added
     * @public
     */
    public readonly message: Message

    /**
     * Construct the history object
     * @param options
     */
    constructor (options: ChatHistoryAdditionOptions) {
        super({
            ...options,
            event: new HistoryEvent({
                module: HistoryEventModules.CHAT,
                event: HistoryEventChat.ADDITION,
            })
        });
        this.message = options.message;
    }
}
