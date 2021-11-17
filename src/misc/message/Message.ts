import { v4 } from 'uuid';
import { MessageOptions } from './types';

/**
 * Class for a message in the chat
 * @author Eirik Måseidvåg
 */
export default class Message {
    /**
     * The ID of the message
     */
    public id: string;

    /**
     * The ID of the user that sent the message
     */
    public userId: string;

    /**
     * The timestamp the message was sent
     */
    public timestamp: number;

    /**
     * The message itself
     */
    public message: string;

    /**
     * Construct the message
     * @param {MessageOptions} options: the message options
     */
    public constructor (options: MessageOptions) {
        this.id = options.id || v4();
        this.userId = options.userId;
        this.timestamp = options.timestamp || Date.now();
        this.message = options.message;
    }
}
