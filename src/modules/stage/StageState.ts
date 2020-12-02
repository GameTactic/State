import Konva from 'konva';
import { CustomStageConfig } from './config/CustomStageConfig';

export interface StageState {
    stage: Konva.Stage | undefined;
    stageZoomMax: number;
    stageZoomMin: number;
    stageZoomStep: number;
    stageZoom: number;
    stageConfig: CustomStageConfig;
}
