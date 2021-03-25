import { Dimensions, Point } from '../../util';
import {MapVueComponent} from "../types";

export interface MapOptions {
  name: string;
  description: string;
  creatorId: string;
  tacticId: string;
  texture: Object;
  sizeConstant?: number;
  ratio?: Point;
  dimensions?: Dimensions;
  [key: string]: any;
}

export const defaultMapOptions = {
  sizeConstant: 1,
  ratio: {
    x: 1,
    y: 1
  },
  dimensions: {
    width: 1000,
    height: 1000
  }
};

export interface MapInterface {
  mapVueComponent: MapVueComponent;
}
