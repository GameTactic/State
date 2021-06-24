export enum CanvasElementPluginType {
    RANGE = 'range',
    HIGHLIGHT = 'highlight'
}

export type HighlightListenerFunc = (enable: boolean, color: number) => void

export interface CanvasElementPluginOptions {
    id?: string;
    readonly?: boolean;
    label: string;
    visible?: boolean;
    toggleable?: boolean;
}
