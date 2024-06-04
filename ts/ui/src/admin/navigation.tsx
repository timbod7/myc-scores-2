import { AdminDashboard } from "@/admin/pages/admin-dashboard";
import { RequireLogin } from "@/components/RequireLogin";
import { AdminTable } from "./pages/admin-table";
import { AdminTableRow } from "./pages/admin-table-row";


export const ADMIN_ROUTES = {
  '/admin': () =>
    <RequireLogin><AdminDashboard/></RequireLogin>,
  '/admin/tables/:table': (params: Record<string,string>) =>
    <RequireLogin><AdminTable table={params.table}/></RequireLogin>,
  '/admin/tables/:table/:row': (params: Record<string,string>) =>
    <RequireLogin><AdminTableRow table={params.table} rowid={params.row}/></RequireLogin>,
}

export function adminUrl(): string {
  return '/admin';
}

