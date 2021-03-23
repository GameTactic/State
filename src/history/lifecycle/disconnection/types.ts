import { AbstractHistoryOptions } from '../../types';
import User from '../../../user/User';

export interface LifecycleHistoryDisconnectionOptions extends AbstractHistoryOptions {
    user: User
}
