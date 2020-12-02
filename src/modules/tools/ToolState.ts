import { Tool } from './tool/Tool';

export interface ToolState {
    enabledTool?: Tool;
    enabled: boolean;
    tools: Tool[];
}
