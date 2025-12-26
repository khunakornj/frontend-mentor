import { createFileRoute } from '@tanstack/react-router';

import IndexPage from '@/features/home/indexPage';

export const Route = createFileRoute('/_layout/')({
  component: Index,
});

function Index() {
  return <IndexPage />;
}
