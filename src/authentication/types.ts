export interface JWT {
    iss: string;
    aud: string;
    jti: string;
    iat: number;
    exp: number;
    username: string;
    region: JWTRegion;
}

export enum JWTRegion {
    EU = 'eu',
    NA = 'na',
    RU = 'ru',
    SA = 'sa',
}
