import { CanvasElement } from './canvas-element/CanvasElement';
import { CanvasElementHistory } from './canvas-element/history/CanvasElementHistory';

export interface CanvasState {
    canvasElements: CanvasElement[];
    canvasElementsHistory: CanvasElementHistory[];
}
