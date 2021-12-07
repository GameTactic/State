import { SocketDocOptions } from './types';
import SocketDoc from './SocketDoc';

export default abstract class HubSocketDoc extends SocketDoc {
    /**
     * Construct the HubSocketDoc.
     * @param {SocketDocOptions} options - The options to the HubSocketDoc.
     * @protected
     */
    protected constructor(options: SocketDocOptions) {
        super({
            ...options,
            requireAuth: true
        });
    }
}
