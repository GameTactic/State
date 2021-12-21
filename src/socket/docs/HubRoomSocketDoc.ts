import HubSocketDoc from "./HubSocketDoc";
import {UserPermission} from "../../user";
import { HubRoomSocketDocOptions } from "./types";

export default class HubRoomSocketDoc extends HubSocketDoc {
    /**
     * The permission required execute the event
     */
    public permissionScope: UserPermission | undefined;

    /**
     * Construct the HubRoomSocketDoc.
     * @param {HubRoomSocketDocOptions} options - The options to the SocketDoc.
     * @protected
     */
    protected constructor(options: HubRoomSocketDocOptions) {
        super(options);
        this.permissionScope = options.permissionScope;
    }
}
