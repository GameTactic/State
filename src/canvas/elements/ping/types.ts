import { CanvasElementOptions } from '..';

export interface PingOptions extends CanvasElementOptions {
    color: number;
}

export const defaultPingOptions = {
    temporary: true
};
