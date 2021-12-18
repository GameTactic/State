/**
 * This class contains data of an user presentation event
 * @author Eirik Måseidvåg
 */
import History from '../../History';
import HistoryEvent from '../../HistoryEvent';
import { HistoryEventModules } from '../../types';
import { UserHistoryPresentationOptions } from './types';
import { HistoryEventUser } from '../types';

export default class UserHistoryPresentation extends History {
    /**
     * The ID of the user who was updated
     * @public
     */
    public readonly userId: string

    /**
     * Determines weather or not the user is presenting
     */
    public readonly isPresenting: boolean;

    constructor (options: UserHistoryPresentationOptions) {
        super({
            ...options,
            event: new HistoryEvent({
                module: HistoryEventModules.USER,
                event: HistoryEventUser.SET_PRESENTATION
            })
        });
        this.userId = options.userId;
        this.isPresenting = options.isPresenting;
    }
}
