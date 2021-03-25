import { Point } from '../../../util';

export enum CanvasElementName {
  BASE = 'base',
  CIRCLE = 'circle'
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

export interface CanvasElementOptions {
  id?: string;
  temporary: boolean;
  creatorId: string;
  tacticId: string;
  [key: string]: any;
}

export interface TransformableOptions extends CanvasElementOptions {
  transform?: TransformInterface;
}

export const defaultTransformableOptions = {
  skew: {
    x: 0,
    y: 0
  },
  scale: {
    x: 1,
    y: 1
  },
  rotation: 0
};
