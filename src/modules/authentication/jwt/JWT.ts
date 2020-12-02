import { JWTRegion } from './region/JWTRegion';

export interface JWT {
    iss: string;
    aud: string;
    jti: string;
    iat: number;
    exp: number;
    username: string;
    region: JWTRegion;
}
