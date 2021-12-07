import { RoomSocketDocOptions } from './types';
import { UserPermission } from '../../user';
import SocketDoc from './SocketDoc';

export default abstract class RoomSocketDoc extends SocketDoc {
    /**
     * The title of the socket event
     */
    public permissionScope: UserPermission | undefined;

    /**
     * Construct the RoomSocketDoc.
     * @param {RoomSocketDocOptions} options - The options to the SocketDoc.
     * @protected
     */
    protected constructor(options: RoomSocketDocOptions) {
        super(options);
        this.permissionScope = options.permissionScope;
    }
}
