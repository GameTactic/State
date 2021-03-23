/**
 * A simple class to generate an ISO timestamp of the current date and time
 * @author Eirmas
 */
export class ISO {
    static timestamp (): number {
        return (new Date()).getTime();
    }
}
