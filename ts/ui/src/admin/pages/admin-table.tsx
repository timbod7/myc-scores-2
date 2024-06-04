import { useApiWithToken } from "@/hooks/use-app-state";
import { Box, Container, Typography } from "@mui/material";
import { PostgrestClient } from "@supabase/postgrest-js";
import { useEffect, useState } from "react";

export interface AdminTableProps {
  table: string,
}

export function AdminTable(props: AdminTableProps) {

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Admin Table {props.table}
        </Typography>
        <pre>
        </pre>
      </Box>
    </Container>
  );
}
