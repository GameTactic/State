import { Point } from "../../../util";

export interface CustomStageConfig {
    scale: Point;
    width: number;
    height: number;
    initialWidth: number;
    initialHeight: number;
    mapSrc: string;
    mapRatio: number;
}
