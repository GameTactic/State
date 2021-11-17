import CanvasElementPlugin from '../plugin/CanvasElementPlugin';
import { Matrix } from '@pixi/math';

export enum CanvasElementName {
  CIRCLE = 'circle',
  ICON = 'icon',
  ENTITY = 'entity',
  PING = 'ping'
}

export interface CanvasElementInterface {
  readonly name: CanvasElementName;
}

export interface TransformPermissions {
  scale: boolean;
  skew: boolean;
  rotate: boolean;
}

export interface CanvasElementOptions {
  id?: string;
  temporary: boolean;
  creatorId: string;
  viewId: string;
  transform?: Matrix;
  permissions?: TransformPermissions;
  plugins?: Array<CanvasElementPlugin>;
  timestamp?: number;
  [key: string]: any;
}

export const defaultCanvasElementOptions = {
  permissions: {
    scale: true,
    skew: true,
    rotate: true
  },
  plugins: [],
  rotation: 0
};
