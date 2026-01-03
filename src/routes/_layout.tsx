import { createFileRoute, Outlet } from '@tanstack/react-router';

import RootLayout from '@/layout/root/root-layout';

export const Route = createFileRoute('/_layout')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <RootLayout>
      <Outlet />
    </RootLayout>
  );
}
