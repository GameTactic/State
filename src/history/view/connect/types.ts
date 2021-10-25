import { AbstractHistoryOptions } from '../../types';

export interface ViewHistoryConnectOptions extends AbstractHistoryOptions {
    userId: string;
    viewId: string;
}
