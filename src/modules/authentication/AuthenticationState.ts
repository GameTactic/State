import { ExtendedJWT } from './jwt/extended/ExtendedJWT';
import { Providers } from './providers/Providers';

export interface AuthenticationState {
    jwt: ExtendedJWT | null;
    providers: Providers;
}
