import AuthApiResponse from '../AuthApiResponse';
import ProviderAuthApiEntity from './provider/ProviderAuthApiEntity';

export default class ProviderAuthApiResponse extends AuthApiResponse {

    /**
     * Enabled login providers
     * @public
     */
    public readonly enabled: Array<ProviderAuthApiEntity>;

    /**
     * Disabled login providers
     * @public
     */
    public readonly disabled: Array<ProviderAuthApiEntity>;

    constructor(options: {enabled: Array<ProviderAuthApiEntity>, disabled: Array<ProviderAuthApiEntity>}) {
        super();
        this.enabled = options.enabled;
        this.disabled = options.disabled;
    }
}
