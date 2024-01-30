
import React, { useEffect, useState } from 'react';
import { Service } from '../service';
import { FetchHttp } from '../service/fetch-http';
import { ApiWithToken, AuthState, JwtClaims, expiry_secs, localStoreGet, localStorePut, localStoreRemove } from '../auth';
import { jwtDecode } from "jwt-decode";

import { LoginResp } from '@/adl-gen/protoapp/apis/ui';

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

export const AppStateContext =
  React.createContext<AppState | undefined>(undefined);
  

export function AppStateProvider(props: {
  children?: React.ReactNode;
}) {
  const [authState, setAuthState] = useState<AuthState>({kind:"noauth"});

  // Reuse a token from local storage if it's got more than 60 seconds
  useEffect(() => {
    const auth = localStoreGet();
    if (auth) {
      if (expiry_secs(auth.jwt_decoded) > 60) {
        setAuthState({kind:"auth", auth});
      }
    }
  }, []);

  async function setAuthStateFromLogin(resp: LoginResp) {
    switch (resp.kind) {
      case "access_token": {
        const jwt = resp.value;
        const jwt_decoded = jwtDecode(jwt) as JwtClaims;
        console.log("new jwt", jwt_decoded);
        let auth =  {jwt, jwt_decoded};
        setAuthState({kind:"auth", auth});
        localStorePut(auth);
        break;
      }
      case "invalid_credentials": {
        setAuthState({kind:"authfailed"});
        break;
      }
    }
  }

  async function login(email: string, password: string): Promise<LoginResp> {
    const resp = await protoappApi.login({email,password});
    await setAuthStateFromLogin(resp);
    return resp;
  }

  async function logout() {
    localStoreRemove();
    setAuthState({kind:'noauth'});
  }

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
