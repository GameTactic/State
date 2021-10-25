/**
 * A simple class to generate an ISO timestamp of the current date and time
 * @author Eirik Måseidvåg
 */
export class ISO {
    public static timestamp (): number {
        return (new Date()).getTime();
    }
}
