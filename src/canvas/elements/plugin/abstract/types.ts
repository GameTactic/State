export interface CanvasElementPluginOptions {
    id?: string;
    readonly?: boolean;
    label: string;
    visible?: boolean;
    toggleable?: boolean;
}

export enum CanvasElementPluginType {
    RANGE = 'range',
    HIGHLIGHT = 'highlight',
    SHADOW = 'shadow'
}
