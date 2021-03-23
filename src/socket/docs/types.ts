export default interface SocketDoc {
    title: string;
    description: string;
    event: string;
    type: SocketEventType;
// eslint-disable-next-line
}

export enum SocketEventType {
    NONE = 0x0,
    IN = 0x1,
    OUT = 0x2,
    IN_AND_OUT = 0x3
}
