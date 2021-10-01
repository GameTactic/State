import { AbstractHistoryOptions } from '../../types';
import Message from '../../../misc/message/Message';

export interface ChatHistoryAdditionOptions extends AbstractHistoryOptions {
    message: Message;
}
