import { AbstractHistoryOptions } from '../../types';

export interface UserHistoryPresentationOptions extends AbstractHistoryOptions {
    userId: string;
    isPresenting: boolean;
}
