import { CanvasElementOptions } from '..';

export interface TextOptions extends CanvasElementOptions {
  backgroundColor?: number;
  color: number;
  size: number;
}

export const defaultTextOptions = {
  temporary: false
};
