import { AbstractHistoryOptions } from '../../types';
import User from '../../../user/User';

export interface UserHistoryShareOptions extends AbstractHistoryOptions {
    targetUserId: string;
    user: User;
}
