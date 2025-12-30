import IndexPage from '@features/home/index-page';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_layout/')({
  component: Index,
});

function Index() {
  return <IndexPage />;
}
