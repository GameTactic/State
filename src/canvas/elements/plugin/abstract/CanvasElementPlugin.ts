import { CanvasElementPluginType } from './types';

/**
 * An canvas element plugin can be used to give canvas elements extra functionality
 *
 * Examples:
 * Plugins can bound to the canvas elements event listeners to execute custom logic
 * Plugins can mutate the PIXI object to alter their appearance
 *
 * @author Eirik Måseidvåg
 */
export default abstract class CanvasElementPlugin {
    /**
     * The type of canvas element plugin
     * Used to determine which class the plugin shall be rendered with
     */
    public abstract name: CanvasElementPluginType
}
