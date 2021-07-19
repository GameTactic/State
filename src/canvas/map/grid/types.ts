import Grid from './Grid';
import { Dimensions } from '../../../util';

export interface GridGroupOptions {
    name: string;
    multiple: boolean;
    grids: Array<Grid>
}

export interface GridOptions {
    name: string;
    isVisible: boolean;
    url: string;
    dimensions: Dimensions;
}
