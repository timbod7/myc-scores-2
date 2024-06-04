import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { useRoutes } from 'raviger';

import { Landing} from "./pages/landing";
import { Login } from "./pages/login";
import { Logout} from "./pages/logout";
import { Messages} from "./pages/messages";
import { RequireLogin } from './components/RequireLogin';

import theme from './theme';
import { AppStateProvider } from './hooks/use-app-state';
import { AdminDashboard } from './admin/pages/admin-dashboard';
import { ROUTES } from './navigation';


function Root() {
  let route = useRoutes(ROUTES);
  return (
    <React.StrictMode>
      <AppStateProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {route}
      </ThemeProvider>
      </AppStateProvider>
    </React.StrictMode>
    );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<Root/>);
