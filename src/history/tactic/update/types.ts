import { AbstractHistoryOptions } from '../../types';
import Tactic from '../../../tactic/Tactic';

export interface TacticHistoryUpdateOptions extends AbstractHistoryOptions {
    tacticId: string;
    changes: Partial<Omit<Tactic, 'id' | 'creatorId'>>;
}
