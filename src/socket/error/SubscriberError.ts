/**
 * Error class for subscribers
 * @author Eirik Måseidvåg
 */
export default class SubscriberError<T> {
    /**
     * The event that was triggered to cause the error
     */
    public readonly event: string

    /**
     * The payload provided to the subscriber
     */
    public readonly payload: T

    /**
     * The name of the error
     */
    public readonly name: string

    /**
     * The message from the error
     */
    public readonly message: string

    /**
     * The error stack
     */
    public readonly stack: string | undefined

    /**
     * Construct the error
     * @template T
     * @param {Error} e: the original error
     * @param {string} event: the event that was triggered to cause the error
     * @param {T} payload: the payload provided to the subscriber
     */
    public constructor(e: Error, event: string, payload: T) {
        this.name = e.name;
        this.message = e.message;
        this.stack = e.stack;
        this.event = event;
        this.payload = payload;
    }
}
