import User from '../../user/User';
import Tactic from '../../tactic/Tactic';
import { Dimensions, Point } from '../../util';

export interface MapOptions {
  name: string;
  description: string;
  creator: User;
  tactic: Tactic;
  texture: Object;
  sizeConstant?: number;
  ratio?: Point;
  dimension?: Dimensions;
}

export const defaultMapOptions = {
  sizeConstant: 1,
  ratio: {
    x: 1,
    y: 1
  },
  dimension: {
    width: 1000,
    height: 1000
  }
};
