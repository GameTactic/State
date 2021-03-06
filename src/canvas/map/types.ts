import { Dimensions } from '../../util';
import { MapVueComponent } from '../types';

export interface MapOptions {
  name: string;
  description: string;
  creatorId: string;
  tacticId: string;
  url: string;
  dimensions: Dimensions;
  sizeConstant?: number;
  [key: string]: any;
}

export interface MapInterface {
  mapVueComponent: MapVueComponent;
}
