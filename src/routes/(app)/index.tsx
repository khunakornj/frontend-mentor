import { createFileRoute } from '@tanstack/react-router';

import HomePage from '@/features/home/home-page';

export const Route = createFileRoute('/(app)/')({
  component: Index,
});

function Index() {
  return <HomePage />;
}
