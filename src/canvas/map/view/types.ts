import GridGroup from '../grid/GridGroup';
import { Dimensions } from '../../../util';
import Image from '../../../misc/image/Image';

export interface ViewOptions {
    id?: string;
    name: string;
    gridGroups: Array<GridGroup>;
    image: Image;
    dimensions: Dimensions;
}
