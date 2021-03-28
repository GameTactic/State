export default class ProviderRegionAuthApiEntity {
    /**
     * Name of the region
     * @public
     */
    public readonly name: string;
    /**
     * Path in the authentication microservice to start login process
     * @public
     */
    public readonly path: string;

    constructor(name: string, path: string) {
        this.name = name;
        this.path = path;
    }
}

