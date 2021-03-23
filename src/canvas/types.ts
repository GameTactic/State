export enum MapVueComponent {
  DEFAULT = 'default',
  WOT = 'wot',
  WOWS = 'wows'
}

export interface MapInterface {
  getVueComponent: () => MapVueComponent;
}
