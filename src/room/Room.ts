import { RoomOptions } from './types';
import { v4 } from 'uuid';
import Image from '../misc/image/Image';
import { Game } from '../misc/games';

/**
 * The room object. Data including general room details
 *
 * @author Eirik Måseidvåg
 */
export default class Room {
    /**
     * The room ID
     */
    public id: string

    /**
     * The name of the room
     */
    public name: string

    /**
     * The room description
     */
    public description: string

    /**
     * The game the room is made for
     */
    public readonly game: Game

    /**
     * Cover image for the room. Will use games default cover if null
     */
    public cover: string | null

    /**
     * Determines weather the room is private or public
     */
    public isPrivate: boolean

    /**
     * The timestamp the room was created
     */
    public readonly created: number

    /**
     * The timestamp the room was last update
     */
    public updated: number

    /**
     * ID of the user who created the room
     */
    public creatorId: string

    public constructor(options: RoomOptions) {
        this.id = options.id || v4();
        this.name = options.name;
        this.description = options.description;
        this.game = options.game;
        this.cover = options.cover || null;
        this.isPrivate = options.isPrivate || false;
        this.created = options.created || Date.now();
        this.updated = options.updated || Date.now();
        this.creatorId = options.creatorId;
    }
}
