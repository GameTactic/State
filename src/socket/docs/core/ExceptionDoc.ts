import SocketDoc, { SocketEventType } from '../types';

export default class ExceptionDoc implements SocketDoc {
    title = 'Exception';
    description = 'Returns error from previous action.';
    type = SocketEventType.OUT;
    event = 'exception';
}

export interface SocketException {
    error: Error;
    event: string;
    code?: number;
}
