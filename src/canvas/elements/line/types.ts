import { CanvasElementOptions } from '..';

export enum LineStrokeStyle {
  NORMAL = 'normal',
  DASHED = 'dashed'
}

export enum LineHeadStyle {
  NONE = 'none',
  ARROW = 'arrow',
  BONE = 'bone',
}

export interface LineOptions extends CanvasElementOptions {
  strokeStyle?: LineStrokeStyle;
  headStyle?: LineHeadStyle;
  opacity?: number;
  strokeWidth: number;
  color: number;
  points: Array<{ x: number; y: number }>;
}

export const defaultLineOptions = {
  temporary: false,
  strokeStyle: LineStrokeStyle.NORMAL,
  headStyle: LineHeadStyle.NONE,
  opacity: 1
};
