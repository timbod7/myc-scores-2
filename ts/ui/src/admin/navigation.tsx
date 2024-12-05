import { AdminDashboard } from "@/admin/pages/admin-dashboard";
import { RequireLogin } from "@/components/RequireLogin";


export const ADMIN_ROUTES = {
  '/admin': () =>
    <RequireLogin><AdminDashboard/></RequireLogin>,
}

export function adminUrl(): string {
  return '/admin';
}

