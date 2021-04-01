export interface JWT {
    aud: string; // Ulid of OAuth Client
    nbf: number; // Not valid before
    iat: number; // Issued at
    exp: number; // Expires at
    iss: number; // Issuer name
    sub: string; // Ulid of User
    nickname: string; // Data from OpenID scope `profile`
}
