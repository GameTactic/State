import ProviderRegionAuthApiEntity from './ProviderRegionAuthApiEntity';

export default class ProviderAuthApiEntity {
    /**
     * Name of the provider
     * @public
     */
    public readonly name: string;
    /**
     * URI to the icon of the provider
     * @public
     */
    public readonly icon: string;
    /**
     * Path in the authentication microservice to start login process
     * @public
     */
    public readonly path: string|null;
    /**
     * Is using multiple regions
     * @public
     */
    public readonly multiRegion: boolean;
    /**
     * Available regions
     * @public
     */
    public readonly regions: Array<ProviderRegionAuthApiEntity>;

    constructor(
        name: string,
        icon: string,
        path: string|null,
        multiRegion: boolean,
        regions: Array<ProviderRegionAuthApiEntity>
    ) {
        this.name = name;
        this.icon = icon;
        this.path = path;
        this.multiRegion = multiRegion;
        this.regions = regions;
    }
}

