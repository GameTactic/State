import { Point } from '../../../util';
import CanvasElementPlugin from '../plugin/CanvasElementPlugin';

export enum CanvasElementName {
  BASE = 'base',
  CIRCLE = 'circle',
  ICON = 'icon',
  ENTITY = 'entity'
}

export interface CanvasElementInterface {
  readonly name: CanvasElementName;
  readonly isTransformable: boolean;
}

export interface TransformInterface {
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
  plugins?: Array<CanvasElementPlugin>
  [key: string]: any;
}

export interface TransformableOptions extends CanvasElementOptions {
  transform?: TransformInterface;
  permissions?: TransformPermissionsInterface;
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
