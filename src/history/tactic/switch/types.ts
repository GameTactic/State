import { AbstractHistoryOptions } from '../../types';
import User from '../../../user/User';
import Tactic from '../../../tactic/Tactic';

export interface TacticHistorySwitchOptions extends AbstractHistoryOptions {
    oldTactic: Tactic;
    newTactic: Tactic;
    user: User;
}
