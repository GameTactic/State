import { AbstractHistoryOptions } from '../../types';
import Room from '../../../room/Room';

export interface RoomHistoryAdditionOptions extends AbstractHistoryOptions {
    room: Room;
}
