import History from "../../history/History";
import { SocketException } from "./core";

export default interface SocketDoc<T extends History | SocketException> {
    title: string;
    description: string;
    event: string;
    type: SocketEventType;
}

export enum SocketEventType {
    NONE = 0x0,
    IN = 0x1,
    OUT = 0x2,
    IN_AND_OUT = 0x3
}
