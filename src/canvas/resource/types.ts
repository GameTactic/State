import Image from '../../misc/image/Image';
import { TransformPermissions } from '../elements/abstract';
import CanvasElementPlugin from '../elements/plugin/CanvasElementPlugin';

export interface ResourceOptions {
    label: string;
    icon: Image;
    permissions?: TransformPermissions;
    temporary: boolean;
    type: ResourceType;
    plugins: Array<CanvasElementPlugin>;
    caption: string;
    picture: Image;
    isDefault?: boolean;
    categories?: Array<string>;
    width: number;
    height: number;
}

export enum ResourceType {
    ENTITY = 'ENTITY',
    ICON = 'ICON'
}
