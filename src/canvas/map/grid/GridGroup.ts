import Grid from './Grid';
import { GridGroupOptions } from './types';

/**
 * A grid group includes multiple grid for a view
 * An example for a grid group is a group of starting positions or game mode for the view.
 * In this case multiple will be <code>false</code>
 * For another grid group example we might have broken walls/floors grid group for Rainbow Six Siege.
 * This group of grids have multiple grids for displaying different walls/floors as broken.
 * In that case we want multiple to be true as we want to be able to display multiple walls/floors as broken at a time.
 * @author Eirik Måseidvåg
 */
export default class GridGroup {
    /**
     * The name of the grid group
     */
    public name: string

    /**
     * Determines weather or not the grid group can have multiple grids displayed at once
     */
    public multiple: boolean

    /**
     * The grids in the group
     */
    public grids: Array<Grid>

    /**
     * Construct the grid group
     * @param {GridGroupOptions} options: the options
     */
    public constructor(options: GridGroupOptions) {
        this.name = options.name;
        this.multiple = options.multiple;
        this.grids = options.grids;
    }
}
