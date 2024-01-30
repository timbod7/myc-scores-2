
import { Landing} from "./pages/landing";
import { Login } from "./pages/login";
import { Logout} from "./pages/logout";
import { Messages} from "./pages/messages";

export const ROUTES = {
  '/': () => <Landing />,
  '/login': () => <Login />,
  '/logout': () => <Logout/>,
  '/messages': () => <Messages/>,
};

export function landingUrl(): string {
  return '/';
}

export function loginUrl(): string {
  return '/login';
}

export function logoutUrl(): string {
  return '/logout';
}

export function messagesUrl(): string {
  return '/messages';
}
