import {Game} from "../../../misc/games";
import {UserPermission} from "../../../user";

export interface CreateRoomPayload {
    name: string;
    description: string;
    game: Game;
    cover: string | null;
    isPrivate: boolean;
}

export type UpdateRoomPayload = Omit<CreateRoomPayload, 'game'>;

export interface SingleRoomResponse {
    id: string;
    name: string;
    description: string;
    game: Game;
    cover: null | string;
    members: Array<SingleRoomMemberResponse>;
    rootCollection: SingleRoomRootCollectionResponse;
    isPrivate: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface SingleRoomMemberResponse {
    userId: string;
    permissions: Array<UserPermission>;
}

export interface SingleRoomRootCollectionResponse {
    id: string;
    name: string;
    children: Array<any>;
}

export interface PaginatedRoomsResponse {
    bookmark: string | null | undefined,
    rooms: Array<SingleRoomResponse>,
}
