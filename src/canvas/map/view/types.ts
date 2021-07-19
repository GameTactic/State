import GridGroup from '../grid/GridGroup';
import { Dimensions } from '../../../util';

export interface ViewOptions {
    id?: string;
    name: string;
    gridGroups: Array<GridGroup>;
    url: string;
    dimensions: Dimensions;
}
