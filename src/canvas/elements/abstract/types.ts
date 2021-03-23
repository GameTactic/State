import { Point } from '../../../util';
import User from '../../../user/User';
import Tactic from '../../../tactic/Tactic';

export enum CanvasElementName {
  BASE = 'base',
  CIRCLE = 'circle'
}

export interface CanvasElementInterface {
  readonly name: CanvasElementName;
}

export interface TransformInterface {
  skew?: Point;
  scale?: Point;
  rotation?: number;
}

export interface CanvasElementOptions {
  temporary: boolean;
  creator: User;
  tactic: Tactic;
}

export interface TransformableOptions extends CanvasElementOptions {
  transform?: TransformInterface;
}
