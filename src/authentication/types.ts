export interface JWT {
    aud: string; // Ulid of OAuth Client
    iat: number; // Issued at
    exp: number; // Expires at
    sub: string; // ULID of User
}

export interface AccessToken extends JWT {
    scopes: string[] // List of accepted scopes
}

export interface IDToken extends JWT {
    nickname: string; // Data from OpenID scope `profile`
}
