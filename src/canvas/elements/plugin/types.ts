export enum CanvasElementPluginType {
    RANGE = 'range',
    HIGHLIGHT = 'highlight'
}

export type HighlightListenerFunc = (enable: boolean, color: number) => void

export interface CanvasElementPluginOptions {
    id?: string;
    readonly: boolean;
    label: string;
    visible: boolean;
    toggleable: boolean;
}

export interface RangePluginOptions extends CanvasElementPluginOptions {
    range: number;
    borderFill: number;
    fill: number;
    borderOpacity: number;
    fillOpacity: number;
}

export interface HighlightPluginOptions extends CanvasElementPluginOptions {
    listener: string;
    color?: number;
}
