import { CanvasElementOptions } from '..';

export enum PencilStrokeStyle {
  NORMAL = 'normal',
  DASHED = 'dashed'
}

export interface PencilOptions extends CanvasElementOptions {
  strokeStyle?: PencilStrokeStyle;
  opacity?: number;
  strokeWidth: number;
  color: number;
}

export const defaultPencilOptions = {
  temporary: false,
  strokeStyle: PencilStrokeStyle.NORMAL,
  opacity: 1
};
