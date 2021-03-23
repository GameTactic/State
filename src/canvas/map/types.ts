import User from '../../user/User';
import Tactic from '../../tactic/Tactic';
import { Dimensions, Point } from '../../util';
import { Texture } from 'pixi.js';

export interface MapOptions {
  name: string;
  description: string;
  creator: User;
  tactic: Tactic;
  sizeConstant?: number;
  ratio?: Point;
  texture?: Texture;
  dimension?: Dimensions;
}

export const defaultMapOptions = {
  sizeConstant: 1,
  ratio: {
    x: 1,
    y: 1
  },
  texture: Texture.WHITE,
  dimension: {
    width: 1000,
    height: 1000
  }
}
