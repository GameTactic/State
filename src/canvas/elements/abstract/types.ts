import { Dimensions, Point } from '../../../util';
import CanvasElementPlugin from '../plugin/CanvasElementPlugin';
import { Matrix } from '../transform';

export enum CanvasElementName {
  BASE = 'base',
  CIRCLE = 'circle',
  ICON = 'icon',
  ENTITY = 'entity'
}

export interface CanvasElementInterface {
  readonly name: CanvasElementName;
}

export interface TransformInterface {
  position?: Point;
  dimensions?: Dimensions;
  skew?: Point;
  scale?: Point;
  rotation?: number;
}

export interface TransformPermissions {
  skewX: boolean;
  skewY: boolean;
  scaleX: boolean;
  scaleY: boolean;
}

export interface CanvasElementOptions {
  id?: string;
  temporary: boolean;
  creatorId: string;
  tacticId: string;
  dimensions: Dimensions;
  rotation?: number;
  transform?: Matrix;
  parentTransform?: Matrix;
  permissions?: TransformPermissions;
  plugins?: Array<CanvasElementPlugin>
  [key: string]: any;
}

export const defaultCanvasElementOptions = {
  parentTransform: {
    scaleX: 1,
    skewY: 0,
    skewX: 0,
    scaleY: 1,
    translateX: 0,
    translateY: 0
  },
  transform: {
    scaleX: 1,
    skewY: 0,
    skewX: 0,
    scaleY: 1,
    translateX: 0,
    translateY: 0
  },
  permissions: {
    skewX: true,
    skewY: true,
    scaleX: true,
    scaleY: true
  }
};
