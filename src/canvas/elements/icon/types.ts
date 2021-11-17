import { CanvasElementOptions } from '../abstract';
import Image from '../../../misc/image/Image';

export interface IconOptions extends CanvasElementOptions {
    label: string;
    icon: Image;
    caption: string;
    picture: Image;
    isDefault: boolean;
    width: number;
    height: number;
}
