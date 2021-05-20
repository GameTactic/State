export enum IconPluginType {
    RANGE = 'range'
}

export interface IconPluginOptions {
    id?: string;
    readonly: boolean;
    label: string;
    visible: boolean;
    toggleable: boolean;
}

export interface RangePluginOptions extends IconPluginOptions {
    range: number;
    borderFill: string;
    fill: string;
    borderOpacity: number;
    fillOpacity: number;
}
