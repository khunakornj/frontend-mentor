import { createFileRoute } from '@tanstack/react-router';

import IndexPage from '@/features/home/indexPage';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return <IndexPage />;
}
