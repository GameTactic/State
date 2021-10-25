import { AbstractHistoryOptions } from '../../types';
import Room from '../../../room/Room';

export interface HubHistoryRoomAdditionOptions extends AbstractHistoryOptions {
    room: Room;
}
