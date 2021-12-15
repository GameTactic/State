import { CanvasElementOptions } from '..';

export enum SectorStrokeStyle {
  NORMAL = 'normal',
  DASHED = 'dashed'
}

export interface SectorOptions extends CanvasElementOptions {
  strokeStyle?: SectorStrokeStyle;
  points: Array<{ x: number; y: number }>;
  fill: number;
  borderFill: number;
  size: number;
  fillOpacity?: number;
  borderOpacity?: number;
}

export const defaultSectorOptions = {
  temporary: false,
  strokeStyle: SectorStrokeStyle.NORMAL,
  fillOpacity: 0.6,
  borderOpacity: 1
};
