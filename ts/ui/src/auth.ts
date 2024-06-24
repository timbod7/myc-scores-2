import { Service } from "./service";

export interface Auth {
  jwt: string,
  jwt_decoded: JwtClaims,
};

export interface JwtClaims {
  sub: string,
  exp: number,
};

export interface ApiWithToken {
  api: Service,
  jwt: string,
}

export function expiry_secs(claims: JwtClaims): number {
  const now = Date.now() / 1000;
  return claims.exp - now;
}
