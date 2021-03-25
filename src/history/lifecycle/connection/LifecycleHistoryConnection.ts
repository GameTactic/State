/**
 * This class contains data of an connection event
 * @author Eirmas
 */
import { LifecycleHistoryConnectionOptions } from './types';
import History from '../../History';
import HistoryEvent from '../../HistoryEvent';
import { HistoryEventModules } from '../../types';
import { HistoryEventLifecycle } from '../types';
import { Serialize } from 'serialazy';
import SerializeHelper from '../../../util/SerializeHelper';

@Serialize<LifecycleHistoryConnectionOptions, LifecycleHistoryConnection>({
    down: ((history: LifecycleHistoryConnection) => SerializeHelper.toDown(history)),
    up: ((options: LifecycleHistoryConnectionOptions) => new LifecycleHistoryConnection(options))
})
export default class LifecycleHistoryConnection extends History {
    /**
     * The ID of the user who connected
     * @private
     */
    private readonly _userId: string

    constructor (options: LifecycleHistoryConnectionOptions) {
        super({
            ...options,
            event: new HistoryEvent({
                module: HistoryEventModules.LIFECYCLE,
                event: HistoryEventLifecycle.CONNECTION
            })
        });
        this._userId = options.userId;
    }

    /**
     * Return the ID of the user who connected
     * @returns userId: string
     */
    get userId (): string {
        return this._userId;
    }
}
