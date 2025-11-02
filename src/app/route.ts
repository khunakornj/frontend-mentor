import RootPage from './root/index/RootPage.tsx';
import { createRoute } from '@tanstack/react-router';
import type { RootRoute } from '@tanstack/react-router';

function getRouteTree(rootRoute: RootRoute) {
  const rootPage = createRoute({
    path: '/',
    component: RootPage,
    getParentRoute: () => rootRoute,
  });

  rootRoute.addChildren([
    //
    rootPage,
  ]);

  return rootRoute;
}

export default getRouteTree;
