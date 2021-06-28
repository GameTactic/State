import { Dimensions, Point } from '../../../util';
import CanvasElementPlugin from '../plugin/CanvasElementPlugin';
import { TransformableOptions, TransformInterface, TransformPermissionsInterface } from '../abstract';

export interface IconOptions extends TransformableOptions {
    label: string;
    url: string;
    caption: string;
    picture: string;
}

export interface AssetOptions {
    label: string;
    url: string;
    transform: Required<TransformInterface>;
    permissions?: TransformPermissionsInterface;
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
