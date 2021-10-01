import { HistoryEventEnums, HistoryEventModules } from '../../history';

export interface SocketDocOptions {
    title: string;
    description: string;
    module: HistoryEventModules;
    event: HistoryEventEnums[HistoryEventModules];
    overrideEvent?: string;
    requireRoom?: boolean;
}

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
     * Determines weather this event requires the user to be in a room for this event to actually trigger
     */
    public requireRoom: boolean;

    /**
     * Construct the SocketDoc.
     * @param {SocketDocOptions} options - The options to create the SocketDoc.
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
        this.requireRoom = options.requireRoom || true;
    }
}
