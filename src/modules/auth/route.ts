import { IMainRoute } from '../../shared/utils/interfaces/route';
import { lazy } from 'react';

const lazyAuth = lazy(() => import('./auth.module'));

export const authRoutes: IMainRoute[] = [
  { path: '/auth', element: lazyAuth, sidebar: false, subRoutes: [] }
];
