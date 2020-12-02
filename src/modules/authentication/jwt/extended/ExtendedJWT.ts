import { JWT } from '../JWT';

export interface ExtendedJWT extends JWT {
    encoded: string;
}
