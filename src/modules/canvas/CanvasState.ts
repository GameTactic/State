import { CanvasElement } from './canvas-element';
import { CanvasElementHistory } from './canvas-element/history';

export interface CanvasState {
    canvasElements: CanvasElement[];
    canvasElementsHistory: CanvasElementHistory[];
}
