import Map from '../../map/Map';
import IconPlugin from './IconPlugin';

export interface IconPluginOptions {
    id?: string;
    readonly: boolean;
    label: string;
    visible: boolean;
    toggleable: boolean;
}

export interface IconPluginDao {
    initialize?: (instance: any) => void
    render: (plugin: IconPlugin, instance?: any, tool?: any, map?: Map) => void;
}
