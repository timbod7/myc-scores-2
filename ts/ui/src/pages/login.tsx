import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTypedFieldState } from '@/components/forms/model/fields/hooks';
import { EMAIL_FIELD, NON_EMPTY_STRING_FIELD } from '@/components/forms/model/fields/primitive';
import { Button, TextField } from '@mui/material';
import { AsyncLoadingButton } from '@/components/Button';

export function Login() {
  const email = useTypedFieldState(EMAIL_FIELD);
  const password = useTypedFieldState(NON_EMPTY_STRING_FIELD);
  const formValid = email.isValid() && password.isValid();

  async function onLogin() {
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Login
        </Typography>

        <TextField
          label="Email"
          onChange={e => email.setText(e.target.value)}
          required
          variant="outlined"
          color="secondary"
          type="email"
          sx={{ mb: 3 }}
          fullWidth
          value={email.text}
          error={!email.isValid()}
        />

        <TextField
          label="Password"
          onChange={e => password.setText(e.target.value)}
          required
          variant="outlined"
          color="secondary"
          type="password"
          value={password.text}
          error={!password.isValid()}
          fullWidth
          sx={{ mb: 3 }}
        />      

        <AsyncLoadingButton variant="contained" onClick={formValid ? onLogin : undefined}>
          <div/>
          Login
        </AsyncLoadingButton>
      </Box>
    </Container>
  );
}
