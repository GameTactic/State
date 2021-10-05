import { AbstractHistoryOptions } from '../../types';
import Room from '../../../room/Room';

export interface RoomHistoryCreateOptions extends AbstractHistoryOptions {
    room: Room;
}
