import IndexPage from '@/features/home/indexPage';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return <IndexPage />;
}
