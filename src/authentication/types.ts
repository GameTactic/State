export interface JWT {
    aud: string;       // ULID of OAuth Client
    iat: number;       // Issued at
    exp: number;       // Expires at
    sub: string;       // ULID of User
}

export interface AccessToken extends JWT {
    scopes: string[];  // List of accepted scopes
    jti: string;       // JWT identifier
}

export interface IDToken extends JWT {
    iss: string;       // Issuer
    nickname: string;  // Data from OpenID scope `profile`
}
