import { SocketDocOptions, SubscriberLevel } from './types';

export default abstract class SocketDoc {
    /**
     * The title of the socket event
     */
    public title: string;

    /**
     * Description of what this event does
     */
    public description: string;

    /**
     * The event to listen for
     */
    public event: string;

    /**
     * The level the SocketDoc event is for
     */
    public level: SubscriberLevel;

    /**
     * Construct the SocketDoc.
     * @param {SocketDocOptions} options - The options to addition the SocketDoc.
     * @protected
     */
    protected constructor(options: SocketDocOptions) {
        this.title = options.title;
        this.description = options.description;
        if (options.overrideEvent) {
            this.event = options.overrideEvent;
        } else {
            this.event = `${options.module}/${options.event}`;
        }
        this.level = options.level;
    }
}
