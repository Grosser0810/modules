import { IMainRoute } from "../../shared/utils";
import { lazy } from "react";

const lazy404 = lazy(() => import("./404.module"));

export const notFoundRoutes: IMainRoute[] = [
  { path: "*", element: lazy404, sidebar: false, subRoutes: [] },
];
