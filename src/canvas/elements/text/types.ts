import { CanvasElementOptions } from '..';

export interface TextOptions extends CanvasElementOptions {
  backgroundColor?: number;
  color: number;
  size: number;
  text: string;
}

export const defaultTextOptions = {
  temporary: false
};
