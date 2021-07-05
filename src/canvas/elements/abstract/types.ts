import { Dimensions, Point } from '../../../util';
import CanvasElementPlugin from '../plugin/CanvasElementPlugin';

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

export interface TransformPermissionsInterface {
  skewX: boolean;
  skewY: boolean;
  scaleX: boolean;
  scaleY: boolean;
  rotation: boolean;
}

export interface CanvasElementOptions {
  id?: string;
  temporary: boolean;
  creatorId: string;
  tacticId: string;
  transform: TransformInterface;
  permissions?: TransformPermissionsInterface;
  plugins?: Array<CanvasElementPlugin>
  [key: string]: any;
}

export const defaultTransformableOptions = {
  transform: {
    skew: {
      x: 0,
      y: 0
    },
    scale: {
      x: 1,
      y: 1
    },
    position: {
      x: 0,
      y: 0
    },
    dimensions: {
      width: 0,
      height: 0
    },
    rotation: 0
  },
  permissions: {
    skewX: true,
    skewY: true,
    scaleX: true,
    scaleY: true,
    rotation: true
  }
};
