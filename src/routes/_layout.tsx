import GlobalLayout from '@features/global-layout/global-layout';
import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/_layout')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <GlobalLayout>
      <Outlet />
    </GlobalLayout>
  );
}
