import { HubHistoryRoomAdditionOptions } from './types';
import History from '../../History';
import HistoryEvent from '../../HistoryEvent';
import { HistoryEventModules } from '../../types';
import { HistoryEventHub } from '../types';
import {Game} from "../../../misc/games";

/**
 * This class contains data of a room creation event
 * @author Eirik Måseidvåg
 */
export default class HubHistoryRoomAddition extends History {
    /**
     * The room name
     * @public
     */
    public readonly name: string

    /**
     * The room description
     * @public
     */
    public readonly description: string

    /**
     * The room game
     * @public
     */
    public readonly game: Game

    /**
     * The room cover
     * @public
     */
    public readonly cover: string | null

    /**
     * Determines weather or not the room is private
     * @public
     */
    public readonly isPrivate: boolean

    constructor (options: HubHistoryRoomAdditionOptions) {
        super({
            ...options,
            event: new HistoryEvent({
                module: HistoryEventModules.HUB,
                event: HistoryEventHub.ADDITION
            })
        });
        this.name = options.name;
        this.description = options.description;
        this.game = options.game;
        this.cover = options.cover;
        this.isPrivate = options.isPrivate;
    }
}
