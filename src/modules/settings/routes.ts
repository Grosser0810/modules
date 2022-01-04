import { IMainRoute } from "../../shared/utils/interfaces/route";
import { lazy } from "react";

const lazySettings = lazy(() => import("./settings.module"));

export const settingsRoutes: IMainRoute[] = [
  { path: "/settings", element: lazySettings, sidebar: true, subRoutes: [] },
];
