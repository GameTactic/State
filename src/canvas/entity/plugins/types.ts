export enum IconPluginType {
    RANGE = 'range',
    HIGHLIGHT = 'highlight'
}

export type HighlightListenerFunc = (enable: boolean, color: number) => void

export interface IconPluginOptions {
    id?: string;
    readonly: boolean;
    label: string;
    visible: boolean;
    toggleable: boolean;
}

export interface RangePluginOptions extends IconPluginOptions {
    range: number;
    borderFill: number;
    fill: number;
    borderOpacity: number;
    fillOpacity: number;
}

export interface HighlightPluginOptions extends IconPluginOptions {
    listener: string;
}
