import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/_layout')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div
      style={{
        height: '100%',
      }}
    >
      <Outlet />
    </div>
  );
}
