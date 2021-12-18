import { AbstractHistoryOptions } from '../../types';
import User from "../../../user/User";

export interface UserHistoryUpdateOptions extends AbstractHistoryOptions {
    userId: string;
    changes: Partial<Pick<User, 'name'>>;
}
