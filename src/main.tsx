// Import the generated route tree
import './styles/base.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { routeTree } from './route-tree.gen';
import { META_INVALIDATE_QUERY_KEY } from './shared/common/constant';

export const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      onSettled: (_data, _error, _variables, _context, mutation) => {
        if (mutation.meta?.[META_INVALIDATE_QUERY_KEY]) {
          queryClient.invalidateQueries({
            queryKey: mutation.meta?.[META_INVALIDATE_QUERY_KEY] as string[],
          });
        }
      },
    },
  },
});

// Create a new router instance
const router = createRouter({
  routeTree,
  context: { queryClient },
  scrollRestoration: true,
  defaultPreload: 'intent',
});

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

// Render the app
const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </StrictMode>,
  );
}
