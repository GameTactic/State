import { AbstractHistoryOptions } from '../../types';
import { Room } from '../../../room';

export interface RoomHistoryCreateOptions extends AbstractHistoryOptions {
    room: Room;
}
