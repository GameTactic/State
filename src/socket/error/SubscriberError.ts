/**
 * Error class for subscribers
 * @author Eirik Måseidvåg
 */
export default class SubscriberError<T> extends Error {
    /**
     * The event that was triggered to cause the error
     */
    public readonly event: string

    /**
     * The payload provided to the subscriber
     */
    public readonly payload: T

    /**
     * Construct the error
     * @template T
     * @param {string} message: Human friendly message of what happened
     * @param {string} event: the event that was triggered to cause the error
     * @param {T} payload: the payload provided to the subscriber
     */
    public constructor(message: string, event: string, payload: T) {
        super(message);
        this.event = event;
        this.payload = payload;
    }
}
