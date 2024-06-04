import { useApiWithToken } from "@/hooks/use-app-state";
import { Box, Container, Typography } from "@mui/material";
import { PostgrestClient } from "@supabase/postgrest-js";
import { useEffect, useState } from "react";



export interface AdminTableRowProps {
  table: string,
  rowid: string,
}

export function AdminTableRow(props: AdminTableRowProps) {

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Admin Row {props.table}/{props.rowid}
        </Typography>
        <pre>
        </pre>
      </Box>
    </Container>
  );
}
