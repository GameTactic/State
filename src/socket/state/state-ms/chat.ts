import Message from "../../../misc/message/Message";

export interface RoomChatResponse {
    roomId: string
    messages: Array<Message>;
}

export interface UpdateChatPayload {
    messages: Array<Message>;
}
