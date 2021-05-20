import IconPlugin from './plugins/IconPlugin';
import { TransformableOptions } from '../elements/abstract';
import { Dimensions } from '../../util';

export interface IconOptions extends TransformableOptions {
  label: string;
  url: string;
  dimensions: Dimensions;
  plugins?: Array<IconPlugin>;
}

export interface EntityOptions extends IconOptions {
  teamId: string;
}
