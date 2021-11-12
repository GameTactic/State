import { Dimensions } from '../../../util';
import CanvasElementPlugin from '../plugin/CanvasElementPlugin';
import { CanvasElementOptions, TransformPermissions } from '../abstract';
import Image from '../../../misc/image/Image';

export interface IconOptions extends CanvasElementOptions {
    label: string;
    icon: Image;
    caption: string;
    picture: Image;
    isDefault: boolean;
}

export interface AssetOptions {
    label: string;
    icon: Image;
    dimensions: Dimensions;
    permissions?: TransformPermissions;
    temporary: boolean;
    type: AssetType;
    plugins: Array<CanvasElementPlugin>;
    caption: string;
    picture: Image;
    isDefault?: boolean;
    categories?: Array<string>;
}

export enum AssetType {
    ENTITY = 'ENTITY',
    ICON = 'ICON'
}
