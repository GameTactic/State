import { Dimensions } from '../../../util';
import CanvasElementPlugin from '../plugin/CanvasElementPlugin';
import { CanvasElementOptions, TransformPermissions } from '../abstract';

export interface IconOptions extends CanvasElementOptions {
    label: string;
    url: string;
    caption: string;
    picture: string;
}

export interface AssetOptions {
    label: string;
    url: string;
    dimensions: Dimensions;
    permissions?: TransformPermissions;
    temporary: boolean;
    type: AssetType;
    plugins: Array<CanvasElementPlugin>;
    caption: string;
    picture: string;
}

export enum AssetType {
    ENTITY = 'ENTITY',
    ICON = 'ICON'
}
