import Room from "../../../room/Room";
import User from "../../../user/User";

export interface RoomExtended extends Room {
    members: Pick<User, 'id' | 'permissions'>;
}
