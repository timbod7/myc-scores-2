import { Service } from "./service";

export type AuthState 
  = { kind: "noauth" }
  | { kind: "auth", auth: Auth}
  | { kind: "authfailed" }
  ;

export interface Auth {
  jwt: string,
  jwt_decoded: JwtClaims,
};

export interface JwtClaims {
  sub: string,
  role: string,
  tenant: string,
  exp: number,
};

export interface ApiWithToken {
  api: Service,
  jwt: string,
}

export const LOCALSTORE_AUTH = "protoapp_auth";

export function localStorePut(auth:Auth) {
  localStorage.setItem(LOCALSTORE_AUTH, JSON.stringify(auth));
};

export function localStoreGet(): Auth | undefined {
  let s = localStorage.getItem(LOCALSTORE_AUTH);
  if (s == undefined) {
    return undefined;
  }
  return JSON.parse(s) as Auth;
};


export function localStoreRemove() {
  localStorage.removeItem(LOCALSTORE_AUTH);
};

export function expiry_secs(claims: JwtClaims): number {
  const now = Date.now() / 1000;
  return claims.exp - now;
}
