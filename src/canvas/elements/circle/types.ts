import { TransformableOptions } from '..';

export enum CircleStrokeStyle {
  NORMAL = 'normal',
  DASHED = 'dashed'
}

export interface CircleOptions extends TransformableOptions {
  fill: number;
  borderFill: number;
  size: number;
  strokeStyle?: CircleStrokeStyle;
  showRadius?: boolean;
  radiusRotation?: number;
  fillOpacity?: number;
  borderOpacity?: number;
}

export const defaultCircleOptions = {
  temporary: false,
  strokeStyle: CircleStrokeStyle.NORMAL,
  showRadius: true,
  fillOpacity: 0.6,
  borderOpacity: 1,
  radiusRotation: 0
};
