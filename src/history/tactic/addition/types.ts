import { AbstractHistoryOptions } from '../../types';
import Tactic from '../../../tactic/Tactic';

export interface TacticHistoryAdditionOptions extends AbstractHistoryOptions {
    tactic: Tactic;
}
