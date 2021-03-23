import {TransformableOptions} from "../abstract/types";
import {Point} from "../../../util";

export enum CircleStrokeStyle {
  NORMAL = 'normal',
  DASHED = 'dashed'
}

export interface CircleOptions extends TransformableOptions {
  fill: number;
  borderFill: number;
  size: number;
  from: Point;
  to: Point;
  strokeStyle?: CircleStrokeStyle;
  showRadius?: boolean;
  fillOpacity?: number;
  borderOpacity?: number;
}

export const defaultCircleOptions = {
  transform: {},
  temporary: false,
  strokeStyle: CircleStrokeStyle.NORMAL,
  showRadius: true,
  fillOpacity: 0.6,
  borderOpacity: 1
}
