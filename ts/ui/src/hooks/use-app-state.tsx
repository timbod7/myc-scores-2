
import React, { useEffect, useState } from 'react';
import { Service } from '../service';
import { FetchHttp } from '../service/fetch-http';
import { ApiWithToken, Auth, JwtClaims, expiry_secs, localStoreGet, localStorePut, localStoreRemove } from '../auth';
import { jwtDecode } from "jwt-decode";

import { LoginResp } from '@/adl-gen/protoapp/apis/ui';
import { logoutUrl } from '@/navigation';
import { useNavigate } from 'raviger';

const protoappApi = new Service(
  new FetchHttp(),
  '/api',
);


interface AppState {
  api: Service,
  authState: AuthState,
  login(email: string, password: string): Promise<LoginResp>,
  logout(): Promise<void>,
}

export type AuthState
  = { kind: "loading" }
  | { kind: "noauth" }
  | { kind: "auth", auth: Auth }
  | { kind: "authfailed" }
  ;


export const AppStateContext =
  React.createContext<AppState | undefined>(undefined);


export function AppStateProvider(props: {
  children?: React.ReactNode;
}) {
  const [authState, setAuthState] = useState<AuthState>({ kind: "loading" });
  const navigate = useNavigate();

  async function setAuthStateFromLogin(resp: LoginResp) {
    switch (resp.kind) {
      case "access_token": {
        const jwt = resp.value;
        const jwt_decoded = jwtDecode(jwt) as JwtClaims;
        console.log("jwt", jwt_decoded);
        let auth = { jwt, jwt_decoded };
        setAuthState({ kind: "auth", auth });
        localStorePut(auth);
        break;
      }
      case "invalid_credentials": {
        setAuthState({ kind: "authfailed" });
        break;
      }
    }
  }

  async function login(email: string, password: string): Promise<LoginResp> {
    const resp = await protoappApi.login({ email, password });
    if (resp.kind == 'access_token') {
      console.log(`using new jwt from login`);
    }
    await setAuthStateFromLogin(resp);
    return resp;
  }

  async function logout() {
    console.log(`logout`);
    localStoreRemove();
    setAuthState({ kind: 'noauth' });
    navigate(logoutUrl());
  }

  // Reuse a token from local storage if it's got more than 30 seconds
  useEffect(() => {
    const auth = localStoreGet();
    if (auth && expiry_secs(auth.jwt_decoded) > 30) {
      console.log(`reusing jwt from local storage`);
      setAuthState({ kind: "auth", auth });
    } else {
      setAuthState({ kind: "noauth" });
    }
  }, []);


  // Logout when the jwt expires
  useEffect(() => {
    if (authState.kind === 'auth') {
      const claims = authState.auth.jwt_decoded;
      const expiry_ms = expiry_secs(claims) * 1000;
      console.log(`scheduling auto logout on jwt expiry in ${expiry_ms} milliseconds`);
      const timeout = setTimeout(() => logout(), expiry_ms);
      return () => clearTimeout(timeout);
    }
  }, [authState]);

  const apiManager = {
    api: protoappApi,
    authState,
    login,
    logout
  };

  return (
    <AppStateContext.Provider value={apiManager}>
      {props.children}
    </AppStateContext.Provider>
  );
}

export function useAppState(): AppState {
  const appState = React.useContext(AppStateContext);
  if (!appState) {
    throw new Error('useAppState invalid outside an AppStateProvider');
  }
  return appState;
}

export function useApiWithToken(): ApiWithToken {
  const appState = useAppState();
  if (appState.authState.kind !== 'auth') {
    throw new Error('useApiWithToken called when user not logged in');
  }
  return {
    api: appState.api,
    jwt: appState.authState.auth.jwt,
  }
}
