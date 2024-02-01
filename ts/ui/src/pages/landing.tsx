import { useAppState } from '@/hooks/use-app-state';
import { Redirect } from 'raviger';

export function Landing() {
  const appState = useAppState();
  if (appState.authState.kind === 'auth') {
    return <Redirect to='/messages' />;
  }
  return <Redirect to='/login' />;
}
