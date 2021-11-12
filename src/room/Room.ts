import { Game } from '../games';
import { RoomOptions } from './types';
import { v4 } from 'uuid';
import Image from '../misc/image/Image';

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
    public cover: Image | null

    /**
     * Determines weather the room is private or public
     */
    public isPrivate: boolean

    /**
     * The timestamp the room was created
     */
    public readonly created: Date

    /**
     * The timestamp the room was last update
     */
    public updated: Date

    /**
     * ID of the user who created the room
     */
    public creatorId: string

    /**
     * The path used in URL to find this room. Must be unique for all rooms
     */
    public path: string

    /**
     * Version control variable
     */
    public version: number

    public constructor(options: RoomOptions) {
        const id = options.id || v4();
        this.id = id;
        this.name = options.name;
        this.description = options.description;
        this.game = options.game;
        this.cover = options.cover || null;
        this.isPrivate = options.isPrivate || false;
        this.created = options.created || new Date();
        this.updated = options.updated || new Date();
        this.creatorId = options.creatorId;
        this.path = options.path || id;
        this.version = options.version || 1;
    }
}
