import IconPlugin from './plugins/IconPlugin';
import { TransformableOptions } from '../elements/abstract';
import {Dimensions, Point} from '../../util';

export interface IconOptions extends TransformableOptions {
  label: string;
  url: string;
  dimensions: Dimensions;
  point: Point;
  plugins?: Array<IconPlugin>;
}

export interface EntityOptions extends IconOptions {
  teamId: string;
  caption: string;
  picture: string;
}
