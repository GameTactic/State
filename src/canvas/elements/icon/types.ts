import { CanvasElementOptions } from '../abstract';
import Resource from '../../resource/Resource';

export type IconResource = Omit<Resource, 'temporary' | 'permissions' | 'type' | 'plugins'>

export interface IconOptions extends CanvasElementOptions {
    resource: Resource;
}
