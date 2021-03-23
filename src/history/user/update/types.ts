import { AbstractHistoryOptions } from '../../types';
import User from '../../../user/User';

export interface UserHistoryUpdateOptions extends AbstractHistoryOptions {
    oldUser: User;
    newUser: User;
}
