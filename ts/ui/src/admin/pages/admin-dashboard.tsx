import { useApiWithToken } from "@/hooks/use-app-state";
import { Box, Container, Typography } from "@mui/material";
import { PostgrestClient } from "@supabase/postgrest-js";
import { useEffect, useState } from "react";


// TODO: make this a parameter
const postgrestUrl = 'http://localhost:5173/db';

export function AdminDashboard() {

  const { jwt } = useApiWithToken();

  const [schema,setSchema] = useState<unknown>({});

  useEffect(() => {
    async function updateSchema(jwt: string) {
      const schema = await loadSchema(jwt);
      setSchema(schema);
    }
      
    updateSchema(jwt);
  }, [jwt]);

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Admin
        </Typography>
        <pre>
        {JSON.stringify(schema, null, 2)}
        </pre>
      </Box>
    </Container>
  );
}

async function loadSchema(jwt: string): Promise<unknown> {
  const resp = await fetch(postgrestUrl, {
    headers: {
      "Authorization" : "Bearer " + jwt
    }
  });
  const jv = await resp.json();
  return jv;
}
